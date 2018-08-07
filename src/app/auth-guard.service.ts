import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { IRootState } from './store/reducers';

@Injectable()
export class AuthGuardService implements CanLoad {

  public constructor(
    private _store: Store<IRootState>,
    private _router: Router,
  ) {}

  public canLoad(route: Route): Observable<boolean> {
    const url: string = (route as any).path;

    return this._store.select('auth', 'isLogged').pipe(
      take(1),
      switchMap((isLogged: boolean) => {
        if (!isLogged && (url === 'login' || url === 'signup' || url === 'reset-password')) {
          // Insert Useproof pixel script only when user is logged in
          // <!--PROOF PIXEL-->
          if (!document.getElementById('useproof_scr')) {
            const pixel = document.createElement('script');
            pixel.id = 'useproof_scr';
            pixel.src = 'https://cdn.useproof.com/proof.js?acc=3xhiSICM81Xs32RqfCshk86aiNs1';
            pixel.async = true;
            document.head.appendChild(pixel);
          }
          // <!--END PROOF PIXEL-->
          return of(true);
        }

        if (isLogged) {
          // Remove Useproof pixel script when user is logged in
          // <!--PROOF PIXEL-->
          const pixel = document.getElementById('useproof_scr');
          if (pixel && pixel.parentNode) {
            pixel.parentNode.removeChild(pixel);
          }
          // <!--END PROOF PIXEL-->
        }
        if (isLogged && (url === 'login' || url === 'signup' || url === 'reset-password')) {
          this._router.navigate(['/dashboard']);
          return of(false);
        }

        if (!isLogged) {
          this._router.navigate(['/login']);
        }
        return of(isLogged);
      })
    );

  }
}

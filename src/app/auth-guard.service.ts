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
          return of(true);
        }

        if (isLogged && (url === 'login' || url === 'signup' || url === 'reset-password')) {
          this._router.navigate(['/backoffice']);
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

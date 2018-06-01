import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { switchMap, take } from 'rxjs/operators';
@Injectable()
export class AuthGuardService implements CanActivate {

  public constructor(
    private _store: Store<StoreStates>,
    private _router: Router,
  ) {}

  public canActivate(...params: (ActivatedRouteSnapshot | RouterStateSnapshot)[]): Observable<boolean> {
    const [, state] = params;
    return this._store.select('auth').pipe(
      take(1),
      switchMap((user: AuthState) => {
        // if  (state.url === '/login/reg/twofactor') {
        //   return of(true);
        // }
        // if (user.isLogged && state.url === '/login/reg/sign-in') {
        //   this._router.navigate(['/backoffice']);
        //   return of(false);
        // }
        // if (!user.isLogged && state.url === '/login/reg/sign-up') {
        //   return of(true);
        // }
        // if (!user.isLogged && state.url !== '/login/reg/sign-in') {
        //   this._router.navigate(['login']);
        //   return of(false);
        // }
        return of(true);
      })
    );

  }
}

import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { LocalStorageService } from '../../shared/services/localStorage.service';
import { SocialNetworkService } from '../../shared/services/social-network.service';
import {
  FACEBOOK_LOGIN, FacebookLoginFail,
  GOOGLE_LOGIN, GoogleLoginFail, Login, LOGIN, LoginFail,
  LoginSuccess, LOGOUT, LogoutFail, LogoutSuccess, SIGN_UP, SignUp, SignUpFail, SignUpSuccess
} from '../actions/auth.action';

@Injectable()
export class AuthEffects {

  @Effect()
  public login$: Observable<Action> = this.actions$
    .ofType(LOGIN).pipe(
      map((action: Login) => action.payload),
      switchMap((user: User) => this._authService.login(user).pipe(
        // TODO check, _authService returns User type,
        // but interseptor return { status: 206 } if return two factor auth success
        // tslint:disable-next-line: no-any
        filter((data: any) => data.status !== 206),
        switchMap((data: User) => this._authService.tokenToLocalStorage(data)),
        map((data: User) => new LoginSuccess(data)),
        tap(() => {
          this._router.navigate(['/backoffice']);
          this._localStorageService.removeItem('referralHash');
        }),
        catchError((err: any) => {
          if (err.status !== 402) {
            alert('Invalid username or password');
          }
          return of(new LoginFail(err));
        })
      )),
  );

  @Effect()
  public signUp$: Observable<Action> = this.actions$
    .ofType(SIGN_UP).pipe(
      map((action: SignUp) => action.payload),
      switchMap((user: User) => this._authService.signUp(user).pipe(
        map((data: User) => new SignUpSuccess(data)),
        tap(() => {
          // alert('Thanks for registration.');
          alert('A verification mail has sent to your email. Please verify it.');
          this._router.navigate(['/login']);
          this._localStorageService.removeItem('referralHash');
        }),
        catchError((err: Error) => {
          alert('Invalid username or email already exists');
          return of(new SignUpFail(err));
        })
      )),
  );

  @Effect()
  public logout$: Observable<Action> = this.actions$
    .ofType(LOGOUT).pipe(
      tap(() => this._authService.removeFromLocalStorage('token')),
      tap(() => this._router.navigate(['/login'])),
      map(() => new LogoutSuccess()),
      catchError((err: Error) => {
        // tslint:disable-next-line
        console.log(err);
        return of(new LogoutFail());
      })
    );

  @Effect()
  public facebookLogin$: Observable<Action> = this.actions$
    .ofType(FACEBOOK_LOGIN).pipe(
      switchMap(() => this._socialNetworkService.facebookLogin()),
      switchMap((result: any) => this._socialNetworkService.successFbLogin(result.authResponse.accessToken).pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((user: User) => new LoginSuccess(user)),
        tap(() => this._router.navigate(['/backoffice'])),
        catchError((err: Error) => {
          alert('Email already exists or somethink went wrong');
          return of(new FacebookLoginFail(err));
        })
      )
      ),
  );

  @Effect()
  public googleLogin$: Observable<Action> = this.actions$
    .ofType(GOOGLE_LOGIN).pipe(
      switchMap(() => this._socialNetworkService.googleSignIn()),
      switchMap((token: string) => this._socialNetworkService.googleSuccessLogin(token).pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((user: User) => new LoginSuccess(user)),
        tap(() => this._router.navigate(['/backoffice'])),
        catchError((err: Error) => {
          alert('Email already exists or somethink went wrong');
          return of(new GoogleLoginFail(err));
        })
      )
      ),
  );

  public constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private _socialNetworkService: SocialNetworkService,
  ) {
  }
}

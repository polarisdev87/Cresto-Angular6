import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import * as AuthActions from '../actions/auth.action';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { LocalStorageService } from '../../shared/services/localStorage.service';

@Injectable()
export class AuthEffects {

  @Effect()
  public getCurrentUser$: Observable<Action> = this.actions$
    .ofType(AuthActions.GET_CURRENT_USER).pipe(
      switchMap(() => this._authService.getCurrentUser().pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((data: User) => new AuthActions.LoginSuccess(data))
      )),
    );

  @Effect()
  public twoFactorVerify$: Observable<Action> = this.actions$
    .ofType(AuthActions.TWO_FACTOR_LOGIN).pipe(
      map((action: AuthActions.TwoFactorLogin) => action.payload),
      switchMap((body: {token: string}) => this._authService.verifyTwoFactor(body).pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((data: User) => new AuthActions.LoginSuccess(data)),
        tap(() => this._router.navigate(['/backoffice'])),
        catchError((err: Error) => of(new AuthActions.LoginFail(err)))
      )),
  );

  @Effect()
  public login$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN).pipe(
      map((action: AuthActions.Login) => action.payload),
      switchMap((user: User) => this._authService.login(user).pipe(
        // TODO check, _authService returns User type,
        // but interseptor return { status: 206 } if return two factor auth success
        // tslint:disable-next-line: no-any
        filter((data: any) => data.status !== 206),
        switchMap((data: User) => this._authService.tokenToLocalStorage(data)),
        map((data: User) => new AuthActions.LoginSuccess(data)),
        tap(() => {
          this._router.navigate(['/backoffice']);
          this._localStorageService.removeItem('referralHash');
        }),
        catchError((err: any) => {
          console.log(err.status);

          if (err.status !== 402) {
            alert('Invalid username or password');
          }
          return of(new AuthActions.LoginFail(err));
        })
      )),
    );

  @Effect()
  public signUp$: Observable<Action> = this.actions$
    .ofType(AuthActions.SIGN_UP).pipe(
      map((action: AuthActions.SignUp) => action.payload),
      switchMap((user: User) => this._authService.signUp(user).pipe(
        map((data: User) => new AuthActions.SignUpSuccess(data)),
        tap(() => {
          // alert('Thanks for registration.');
          alert('A verification mail has sent to your email. Please verify it.');
          this._router.navigate(['/login']);
          this._localStorageService.removeItem('referralHash');
        }),
        catchError((err: Error) => of(new AuthActions.SignUpFail(err)))
      )),
    );

  @Effect()
  public logout$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGOUT).pipe(
      tap(() => this._authService.removeFromLocalStorage('token')),
      tap(() => this._router.navigate(['/login'])),
      map(() => new AuthActions.LogoutSuccess()),
      catchError((err: Error, caught: Observable<Action>) => {
        // tslint:disable-next-line
        console.log(err);
        return caught;
      })
    );

  @Effect()
  public setPassword$: Observable<Action> = this.actions$
    .ofType(AuthActions.SET_PASSWORD).pipe(
      map((action: AuthActions.SetPassword) => action.payload),
      switchMap((value: PasswordData) => this._authService.setPassword(value).pipe(
        map((success: boolean) => new AuthActions.SetPasswordSuccess(success)),
        tap(() => this._router.navigate(['/login'])),
        catchError((err: Error, caught: Observable<Action>) => {
          // tslint:disable-next-line
          console.log(err);
          return caught;
        })
      )),
    );

  @Effect()
  public setResetpasswordEmail$: Observable<Action> = this.actions$
    .ofType(AuthActions.SEND_RESET_PASSWORD_EMAIL).pipe(
      map((action: AuthActions.SendResetPasswordEmail) => action.payload),
      switchMap((email: string) => this._authService.sendResetPasswordEmail(email).pipe(
        map((success: boolean) => new AuthActions.SendResetPasswordEmailSuccess(success)),
        tap(() => {
          alert('We have sent email to reset password');
          this._router.navigate(['/login']);
        }),
        catchError((err: Error, caught: Observable<Action>) => {
          // tslint:disable-next-line
          of(new AuthActions.SendResetPasswordEmailFail(err))
          console.log(err);
          return caught;
        })
      )),

    );

  public constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
  ) { }
}

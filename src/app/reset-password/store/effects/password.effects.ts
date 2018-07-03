import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap, debounceTime } from 'rxjs/operators';
import { AuthService } from '../../../shared/services/auth.service';
import {
  SendResetPasswordEmail,
  SendResetPasswordEmailSuccess,
  SendResetPasswordEmailFail,
  SEND_RESET_PASSWORD_EMAIL,
  SetPasswordSuccess,
  SET_PASSWORD,
  SetPassword
} from '../actions/password.actions';

@Injectable()
export class PasswordEffects {

  @Effect()
  public setPassword$: Observable<Action> = this.actions$
    .ofType(SET_PASSWORD).pipe(
      map((action: SetPassword) => action.payload),
      switchMap((value: PasswordData) => this._authService.setPassword(value).pipe(
        map((success: boolean) => new SetPasswordSuccess(success)),
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
    .ofType(SEND_RESET_PASSWORD_EMAIL).pipe(
      debounceTime(500),
      map((action: SendResetPasswordEmail) => action.payload),
      switchMap((email: string) => this._authService.sendResetPasswordEmail(email).pipe(
        map((success: boolean) => new SendResetPasswordEmailSuccess(success)),
        tap(() => {
          alert('We have sent email to reset password');
          this._router.navigate(['/login']);
        }),
        catchError((err: Error, caught: Observable<Action>) => {
          // tslint:disable-next-line
          of(new SendResetPasswordEmailFail(err))
          console.log(err);
          return caught;
        })
      )),

    );

  public constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _router: Router,
  ) { }
}

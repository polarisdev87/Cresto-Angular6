import { MatDialog } from '@angular/material';
import {
  DELETE_TWOFACTOR,
  DeleteTwoFactor,
  DeleteTwoFactorFail,
  DeleteTwoFactorSuccess,
  TWOFACTOR_SETUP,
  TwoFactorSetupFail,
  TwoFactorSetupSuccess,
  VERIFY_TWOFACTOR,
  VerifyTwoFactor,
  VerifyTwoFactorFail,
  VerifyTwoFactorSuccess,
} from './../actions/twofactor.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { TwoFactorService } from '../../../../../../shared/services/twofactor.service';
import { PopupComponent } from '../../../buy/popup/popup.component';

@Injectable()
export class TwoFactorEffects {
  @Effect()
  public verifyTfoFactor$: Observable<Action> = this.actions$
    .ofType(VERIFY_TWOFACTOR).pipe(
      map((action: VerifyTwoFactor) => action.payload),
      switchMap((body: { token: string }) => this._twoFactorService.verifyTwoFactor(body).pipe(
        map(() => new VerifyTwoFactorSuccess(true)),
        tap(() => this._dialog.open(PopupComponent, {
          data: {
            iconClose: 'icon-close',
            iconClass: 'icon-tick',
            message: 'GOOGLE AUTHENTICATION ENABLED',
            btnClass: '',
            btnTextContent: ''
          }
        })),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          this._dialog.open(PopupComponent, {
            data: {
              iconClose: 'icon-close',
              iconClass: 'icon-Exclamation',
              message: 'Code is not valid, try again',
              btnClass: '',
              btnTextContent: ''
            }

          });
          return of(new VerifyTwoFactorFail(err));
        }),
      )),
    );

  @Effect()
  public setupTwoFactor$: Observable<Action> = this.actions$
    .ofType(TWOFACTOR_SETUP).pipe(
      switchMap(() => this._twoFactorService.twoFactorSetup().pipe(
        map((user: User) => new TwoFactorSetupSuccess(user)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new TwoFactorSetupFail(err));
        }),
      )),
    );

  @Effect()
  public deleteTwoFactor$: Observable<Action> = this.actions$
    .ofType(DELETE_TWOFACTOR).pipe(
      map((action: DeleteTwoFactor) => action.payload),
      switchMap((body: { token: string }) => this._twoFactorService.deleteTfoFactor(body).pipe(
        map((user: User) => new DeleteTwoFactorSuccess(user)),
        tap(() => this._dialog.open(PopupComponent, {data: {message: 'Success'}})),
        catchError((err: any) => {
          // tslint:disable-next-line
          console.log(err);
          // Don't delete this commit!
          // const message: string = err && err.error && err.error.error
          //   ? err.error.error
          //   : 'Something went wrong';
          this._dialog.open(PopupComponent, {
            data: {
              iconClose: 'icon-close',
              iconClass: 'icon-Exclamation',
              message: 'Something went wrong',
              btnClass: '',
              btnTextContent: ''
            }

          });
          return of(new DeleteTwoFactorFail(err));
        }),
      )),
    );

  public constructor(
    private actions$: Actions,
    private _twoFactorService: TwoFactorService,
    private _dialog: MatDialog,
  ) {
  }
}

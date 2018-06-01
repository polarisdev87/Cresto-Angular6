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
} from './../actions/twofactor.action';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TwoFactorService } from '../../shared/services/twofactor.service';
import { OpenStatusPopup } from '../actions/statusPopup.action';

@Injectable()
export class TwoFactorEffects {
  @Effect()
  public verifyTfoFactor$: Observable<Action> = this.actions$
    .ofType(VERIFY_TWOFACTOR).pipe(
      map((action: VerifyTwoFactor) => action.payload),
      switchMap((body: {token: string}) => this._twoFactorService.verifyTwoFactor(body).pipe(
        switchMap(() => [
          new VerifyTwoFactorSuccess(true),
          new OpenStatusPopup({type: 'Success', message: 'Two factor authentication'})
        ]),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          const verifyTwoFactorFail: Action = new VerifyTwoFactorFail(err);
          return of(
            new OpenStatusPopup({type: 'Error', message: 'Something went wrong'}),
            verifyTwoFactorFail,
          );
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
      switchMap((body: {token: string}) => this._twoFactorService.deleteTfoFactor(body).pipe(
        switchMap((user: User) => [
          new DeleteTwoFactorSuccess(user),
          new OpenStatusPopup({type: 'Success', message: 'Two factor authentication deleted.'})
        ]),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          const verifyTwoFactorFail: Action = new DeleteTwoFactorFail(err);
          return of(
            new OpenStatusPopup({type: 'Error', message: 'Something went wrong'}),
            verifyTwoFactorFail,
          );
        }),
      )),
  );

  public constructor(
    private actions$: Actions,
    private _twoFactorService: TwoFactorService
  ) { }
}

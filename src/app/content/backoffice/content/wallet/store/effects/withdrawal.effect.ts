import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import {
  CALCULATE_WITHDRAWAL_FEE_REQUEST,
  CalculateWithdrawalFeeFail,
  CalculateWithdrawalFeeRequest,
  CalculateWithdrawalFeeSuccess,
  WITHDRAWAL_REQUEST,
  WithdrawalFail,
  WithdrawalRequest,
  WithdrawalSuccess
} from './../actions/withdrawal.action';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { WalletsService } from '../../../../../../shared/services/wallets.service';
import { IRootState } from '../../../../../../store/reducers';
import { PopupComponent } from '../../../buy/popup/popup.component';

@Injectable()
export class WithdrawalEffects {
  @Effect()
  public calculateWithdrawalFee$: Observable<Action> = this.actions$
    .ofType(CALCULATE_WITHDRAWAL_FEE_REQUEST).pipe(
      withLatestFrom(this._store.select('backoffice', 'user', '_id')),
      map(([action, userId]: [CalculateWithdrawalFeeRequest, string]) => ({...action.payload, userId})),
      switchMap((data: CalculateFee) => this._walletsService.calculateWithdrawalFee(data).pipe(
        map((res: WithdrawalRes) => new CalculateWithdrawalFeeSuccess(res)),
        catchError((err: Error) => {
          this._dialog.open(PopupComponent, {
            data: {
              iconClose: 'icon-close',
              iconClass: 'icon-Exclamation',
              message: 'Something went wrong!',
            }
          });
          // tslint:disable-next-line
          console.log(err);
          return of(new CalculateWithdrawalFeeFail(err));
        })
      )),
  );

  @Effect()
  public withdrawal$: Observable<Action> = this.actions$
    .ofType(WITHDRAWAL_REQUEST).pipe(
      withLatestFrom(this._store.select('backoffice', 'user', '_id')),
      map(([action, userId]: [WithdrawalRequest, string]) => ({...action.payload, userId})),
      switchMap((data: WithdrawalBody) => this._walletsService.withdrawal(data).pipe(
        map((res: any) => new WithdrawalSuccess(res)),
        tap(() => alert('Success')),
        catchError((err: Error) => {
          this._dialog.open(PopupComponent, {
            data: {
              iconClose: 'icon-close',
              iconClass: 'icon-Exclamation',
              message: 'Something went wrong!',
            }
          });
          // tslint:disable-next-line
          console.log(err);
          return of(new WithdrawalFail(err));
        })
      )),
  );


  public constructor(
    private actions$: Actions,
    private _walletsService: WalletsService,
    private _store: Store<IRootState>,
    private _dialog: MatDialog,
  ) { }
}

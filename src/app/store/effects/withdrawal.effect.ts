import {
  CALCULATE_WITHDRAWAL_FEE_REQUEST,
  CalculateWithdrawalFeeRequest,
  CalculateWithdrawalFeeSuccess,
  CalculateWithdrawalFeeFail,
  WITHDRAWAL_REQUEST,
  WithdrawalRequest,
  WithdrawalSuccess,
  WithdrawalFail
} from './../actions/withdrawal.action';

import { WalletsService } from './../../shared/services/wallets.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class WithdrawalEffects {
  @Effect()
  public calculateWithdrawalFee$: Observable<Action> = this.actions$
    .ofType(CALCULATE_WITHDRAWAL_FEE_REQUEST).pipe(
      map((action: CalculateWithdrawalFeeRequest) => action.payload),
      switchMap((data: CalculateFee) => this._walletsService.calculateWithdrawalFee(data).pipe(
        map((res: WithdrawalRes) => new CalculateWithdrawalFeeSuccess(res)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new CalculateWithdrawalFeeFail(err));
        })
      )),
  );

  @Effect()
  public withdrawal$: Observable<Action> = this.actions$
    .ofType(WITHDRAWAL_REQUEST).pipe(
      map((action: WithdrawalRequest) => action.payload),
      switchMap((data: WithdrawalBody) => this._walletsService.withdrawal(data).pipe(
        map((res: any) => new WithdrawalSuccess(res)),
        tap(() => alert('Success')),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new WithdrawalFail(err));
        })
      )),
  );



  public constructor(
    private actions$: Actions,
    private _walletsService: WalletsService,
  ) { }
}

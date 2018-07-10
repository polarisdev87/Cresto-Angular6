import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  TRANSACTION_REQUEST, TransactionLoadFail,
  TransactionLoadSuccess, TransactionRequest
} from '../actions/transaction.actions';
import { WalletsService } from '../../../../../../shared/services/wallets.service';

@Injectable()
export class TransactionsEffects {


  @Effect()
  public transactionWallets$: Observable<Action> = this.actions$
    .ofType(TRANSACTION_REQUEST).pipe(
      map((action: TransactionRequest) => action.payload),
      switchMap((userId: string) => this._walletsService.transaction(userId).pipe(
        map((data: any) => new TransactionLoadSuccess(data)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new TransactionLoadFail(err));
        })
      )),
  );

  public constructor(
    private actions$: Actions,
    private _walletsService: WalletsService,
  ) {
  }
}

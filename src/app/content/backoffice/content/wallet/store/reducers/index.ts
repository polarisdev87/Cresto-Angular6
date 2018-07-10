import { ActionReducerMap } from '@ngrx/store';

import * as fromTransaction from './transactions.reducer';
import * as fromWithdrawal from './withdrawal.reducer';
import * as fromPurchase from './purchase.reducer';

export interface IBackofficeState {
  transactions: any;
  withdrawal: any;
  purchase: any;
}

export const reducers: ActionReducerMap<IBackofficeState> = {
  transactions: fromTransaction.reducer,
  withdrawal: fromWithdrawal.reducer,
  purchase: fromPurchase.reducer,
};

import { ActionReducerMap } from '@ngrx/store';

import * as fromTransaction from './transactions.reducer';
import * as fromWithdrawal from './withdrawal.reducer';

export interface IBackofficeState {
  transactions: any;
  withdrawal: any;
}

export const reducers: ActionReducerMap<IBackofficeState> = {
  transactions: fromTransaction.reducer,
  withdrawal: fromWithdrawal.reducer,
};

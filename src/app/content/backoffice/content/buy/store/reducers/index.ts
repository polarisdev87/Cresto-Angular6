import { ActionReducerMap } from '@ngrx/store';

import * as fromBuyToken from './buy-tokens.reducer';

export interface IBuyState {
  tokenPurchase: any;
}

export const reducers: ActionReducerMap<IBuyState> = {
  tokenPurchase: fromBuyToken.reducer,
};

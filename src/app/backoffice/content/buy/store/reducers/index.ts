import {ActionReducerMap} from '@ngrx/store';

import * as fromBuyToken from './buy-tokens.reducer';

export interface BuyState {
  tokenPurchase: any;
}

export const reducers: ActionReducerMap<BuyState> = {
  tokenPurchase: fromBuyToken.reducer,
};

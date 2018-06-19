import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducer, ActionReducerMap, createFeatureSelector, MemoizedSelector, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

import * as fromAuth from './auth.reducer';
import * as fromAuthActions from '../actions';

import * as fromAcl from './acl.reducer';
import * as fromStatusPopup from './statusPopup.reducer';
import * as fromWallets from './wallets.reducer';
import * as fromAssets from './assets.reducer';
import * as fromRounds from './rounds.reducer';
import * as fromTransaction from './transaction.reducer';
import * as fromBuyToken from './buy-tokens.reducer';
import * as fromWithdrawal from './withdrawal.reducer';
import * as fromReferral from './referal.reducer';
import * as fromReferralUsers from './referrals-users.reducer';


export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// TODO dont dublicate state type, extend interface
export interface IRootState {
  routerReducer: RouterReducerState<IRouterStateUrl>;
  auth: AuthState;
  acl: AclState;
  statusPopup: StatusPopup;
  wallets: WalletState;
  assets: any;
  rounds: any;
  transaction: any;
  tokenPurchase: any;
  withdrawal: any;
  referral: any;
  referralUsers: any;
}

export const reducers: ActionReducerMap<IRootState> = {
  routerReducer,
  auth: fromAuth.reducer,
  acl: fromAcl.reducer,
  statusPopup: fromStatusPopup.reducer,
  wallets: fromWallets.reducer,
  assets: fromAssets.reducer,
  rounds: fromRounds.reducer,
  transaction: fromTransaction.reducer,
  tokenPurchase: fromBuyToken.reducer,
  withdrawal: fromWithdrawal.reducer,
  referral: fromReferral.reducer,
  referralUsers: fromReferralUsers.reducer
};

export function logoutAndClearState(reducer: ActionReducer<StoreStates>): ActionReducer<StoreStates> {
  return function(state: StoreStates | undefined, action: fromAuthActions.AuthActions): StoreStates {
    switch (action.type) {
      case fromAuthActions.LOGOUT_SUCCESS: {
        state = undefined;
      }
    }
    return reducer(state, action);
  };
}

export const logout: MetaReducer<StoreStates> = logoutAndClearState;


// TODO to separate file
export const getRouterState: MemoizedSelector<object, RouterReducerState<IRouterStateUrl>> =
  createFeatureSelector<RouterReducerState<IRouterStateUrl>>('routerReducer');

export class CustomSerializer
  implements RouterStateSerializer<IRouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const { url, root: { queryParams } } = routerState;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}

import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from '@angular/router';
import {ActionReducer, ActionReducerMap, createFeatureSelector, MemoizedSelector, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState, RouterStateSerializer} from '@ngrx/router-store';

import * as fromAuth from './auth.reducer';
import * as fromAuthActions from '../actions';

import * as fromStatusPopup from './statusPopup.reducer';
import * as fromWallets from './wallets.reducer';
import * as fromRounds from './rounds.reducer';
import * as fromTransaction from './transaction.reducer';
import * as fromWithdrawal from './withdrawal.reducer';


export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// TODO dont dublicate state type, extend interface
export interface IRootState {
  routerReducer: RouterReducerState<IRouterStateUrl>;
  auth: AuthState;
  statusPopup: StatusPopup;
  wallets: WalletState;
  rounds: any;
  transaction: any;
  withdrawal: any;
}

export const reducers: ActionReducerMap<IRootState> = {
  routerReducer,
  auth: fromAuth.reducer,
  statusPopup: fromStatusPopup.reducer,
  wallets: fromWallets.reducer,
  rounds: fromRounds.reducer,
  transaction: fromTransaction.reducer,
  withdrawal: fromWithdrawal.reducer,
};

export function logoutAndClearState(reducer: ActionReducer<StoreStates>): ActionReducer<StoreStates> {
  return function (state: StoreStates | undefined, action: fromAuthActions.AuthActions): StoreStates {
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
    const {url, root: {queryParams}} = routerState;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const {params} = state;
    return {url, queryParams, params};
  }
}

export const metaReducers: MetaReducer<any>[] = [logoutAndClearState];

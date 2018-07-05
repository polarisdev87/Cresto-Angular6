import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducer, ActionReducerMap, createFeatureSelector, MemoizedSelector, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

import * as fromAuth from './auth.reducer';

import { LOGOUT_SUCCESS, AuthActions } from '../actions/auth.action';


export interface IRouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// TODO dont dublicate state type, extend interface
export interface IRootState {
  routerReducer: RouterReducerState<IRouterStateUrl>;
  auth: AuthState;
}

export const reducers: ActionReducerMap<IRootState> = {
  routerReducer,
  auth: fromAuth.reducer,
};

export function logoutAndClearState(reducer: ActionReducer<IRootState>): ActionReducer<IRootState> {
  return function (state: IRootState | undefined, action: AuthActions): IRootState {
    switch (action.type) {
      case LOGOUT_SUCCESS: {
        state = undefined;
      }
    }
    return reducer(state, action);
  };
}

export const logout: MetaReducer<IRootState> = logoutAndClearState;


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

export const metaReducers: MetaReducer<any>[] = [logoutAndClearState];

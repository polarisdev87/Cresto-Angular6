import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';
import { isEmpty } from 'lodash';

export const getAuthState: MemoizedSelector<object, AuthState> = createFeatureSelector<AuthState>('auth');

export const getAuthUser: MemoizedSelector<StoreStates, User | {}> = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getAuthUserId: MemoizedSelector<StoreStates, User | {}> = createSelector(
  getAuthState,
  (state: AuthState) => (state.user as any)._id
);

export const getUserTfa: MemoizedSelector<StoreStates, boolean> = createSelector(
  getAuthState,
  (state: AuthState) => (state.user as User).twofactorEnabled
);

export const getUserLoader: MemoizedSelector<StoreStates, boolean> = createSelector(
  getAuthState,
  (state: AuthState) => state.loading
);

export const isLoggedSelector: MemoizedSelector<StoreStates, boolean> = createSelector(
  getAuthState,
  (state: AuthState) => state.isLogged
);


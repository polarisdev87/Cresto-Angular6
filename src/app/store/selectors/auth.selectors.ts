import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';
import { IRootState } from '../reducers';

export const getAuthState: MemoizedSelector<object, AuthState> = createFeatureSelector<AuthState>('auth');

export const getAuthUser: MemoizedSelector<IRootState, User | {}> = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getAuthUserId: MemoizedSelector<IRootState, string> = createSelector(
  getAuthState,
  (state: AuthState) => (state.user as any)._id
);

export const getUserTfa: MemoizedSelector<IRootState, boolean> = createSelector(
  getAuthState,
  (state: AuthState) => (state.user as User).twofactorEnabled
);

export const getUserLoader: MemoizedSelector<IRootState, boolean> = createSelector(
  getAuthState,
  (state: AuthState) => state.loading
);

export const isLoggedSelector: MemoizedSelector<IRootState, boolean> = createSelector(
  getAuthState,
  (state: AuthState) => state.isLogged
);


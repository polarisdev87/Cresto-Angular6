import { getSettingsState } from './password.selectors';
import { createSelector, MemoizedSelector  } from '@ngrx/store';


export const getTwoFactorState: MemoizedSelector<object, TwoFactorState> = createSelector(
  getSettingsState,
  (state: SettingsState) => state.twoFactor
);

export const getTwoFactorLoader: MemoizedSelector<object, boolean> = createSelector(
  getTwoFactorState,
  (state: TwoFactorState) => state.isLoading
);


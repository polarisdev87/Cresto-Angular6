import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';

export const getSettingsState: MemoizedSelector<object, SettingsState> =
createFeatureSelector<SettingsState>('settings');

export const getPasswordState: MemoizedSelector<object, PasswordState> = createSelector(
  getSettingsState,
  (state: SettingsState) => state.password
);

export const getPasswordStatus: MemoizedSelector<object, boolean> = createSelector(
  getPasswordState,
  (state: PasswordState) => state.updated
);

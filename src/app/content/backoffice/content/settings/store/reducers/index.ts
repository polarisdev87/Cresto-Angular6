import { ActionReducerMap } from '@ngrx/store';
import * as editPassword from './edit-password.reducer';
import * as fromTwoFactor from './twofactor.reducer';

export interface SettingsState {
  editPassword: editPassword.EditPasswordState;
  tfa: fromTwoFactor.TwoFactorState;
}

export const reducers: ActionReducerMap<SettingsState> = {
  editPassword: editPassword.reducer,
  tfa: fromTwoFactor.reducer
};


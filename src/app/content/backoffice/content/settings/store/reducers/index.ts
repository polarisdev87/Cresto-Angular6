import { ActionReducerMap } from '@ngrx/store';
import * as editPassword from './edit-password.reducer';
import * as fromTwoFactor from './twofactor.reducer';

export interface ISettingsState {
  editPassword: editPassword.IEditPasswordState;
  tfa: fromTwoFactor.ITwoFactorState;
}

export const reducers: ActionReducerMap<ISettingsState> = {
  editPassword: editPassword.reducer,
  tfa: fromTwoFactor.reducer
};


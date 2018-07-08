import { ActionReducerMap } from '@ngrx/store';
import * as editPassword from './edit-password.reducer';

export interface SettingsState {
  editPassword: editPassword.EditPasswordState;
}

export const reducers: ActionReducerMap<SettingsState> = {
  editPassword: editPassword.reducer
};


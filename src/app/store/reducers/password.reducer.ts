import { EDIT_USER_PASSWORD_SUCCESS, EDIT_USER_PASSWORD_FAIL } from '../actions/password.actions';

export const initialState: PasswordState = {
  updated: false,
  error: false
};

export function reducer(
  state: PasswordState = initialState,
  action: any
): PasswordState {
  switch (action.type) {

    case EDIT_USER_PASSWORD_SUCCESS: {
      return {
        updated: true,
        error: false
      };
    }

    case EDIT_USER_PASSWORD_FAIL: {
      return {
        updated: false,
        error: true
      };
    }

    default:
      return state;
  }
}

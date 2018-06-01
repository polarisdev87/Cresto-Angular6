import * as fromActions from '../actions';
import { EDIT_PERSONAL_INFO_SUCCESS, EDIT_PERSONAL_INFO_FAIL } from '../actions/personal-info.actions';


export const initialState: PersonalInfoState = {
  updated: false,
  error: false
};

export function reducer(
  state: PersonalInfoState = initialState,
  action: any
): PersonalInfoState {
  switch (action.type) {

    case EDIT_PERSONAL_INFO_SUCCESS: {
      return {
        updated: true,
        error: false
      };
    }

    case EDIT_PERSONAL_INFO_FAIL: {
      return {
        updated: false,
        error: true
      };
    }

    default:
      return state;
  }
}

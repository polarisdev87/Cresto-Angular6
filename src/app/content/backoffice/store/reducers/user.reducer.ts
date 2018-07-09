import { DELETE_TWOFACTOR_SUCCESS, VERIFY_TWOFACTOR_SUCCESS } from './../../content/settings/store/actions/twofactor.actions';
import { EDIT_USER_SUCCESS } from './../actions/user.actions';
import { GET_CURRENT_USER_SUCCESS } from '../actions/user.actions';

export const initialState: any = {};

// tslint:disable-next-line: no-any
export function reducer(state: User = initialState, action: any): User {

  switch (action.type) {

    case GET_CURRENT_USER_SUCCESS: {
      return action.payload;
    }

    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }

    case DELETE_TWOFACTOR_SUCCESS: {
      return {
        ...state,
        twofactorEnabled: false
      };
    }

    case VERIFY_TWOFACTOR_SUCCESS: {
      return {
        ...state,
        twofactorEnabled: true
      };
    }

    default: {
      return state;
    }
  }
}

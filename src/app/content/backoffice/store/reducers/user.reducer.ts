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

    default: {
      return state;
    }
  }
}

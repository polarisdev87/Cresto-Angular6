import { ACL_SUCCESS } from '../actions/acl.actions';
import { LOGOUT_SUCCESS } from '../../../store/actions';

export const initialState: AclState = {};

// tslint:disable-next-line: no-any
export function reducer(state: AclState = initialState, action: any): AclState {
  switch (action.type) {
    case ACL_SUCCESS: {
      return action.payload;
    }

    case LOGOUT_SUCCESS: {
      return {};
    }

    default: {
      return state;
    }
  }
}

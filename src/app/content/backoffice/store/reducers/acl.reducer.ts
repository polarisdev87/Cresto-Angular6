import { ACL_SUCCESS } from '../actions/acl.actions';

export const initialState: AclState = {};

// tslint:disable-next-line: no-any
export function reducer(state: AclState = initialState, action: any): AclState {
  switch (action.type) {
    case ACL_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

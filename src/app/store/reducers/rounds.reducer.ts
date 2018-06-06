import { ROUNDS_SUCCESS, ROUNDS_FAIL } from './../actions/wallets.action';
import { StatusPopupTypes } from '../actions/statusPopup.action';
import { ROUNDS_REQUEST } from '../actions/wallets.action';

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  data: []
};

// tslint:disable-next-line: no-any
export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {

    case ROUNDS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case ROUNDS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }

    case ROUNDS_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
      };
    }

    default: {
      return state;
    }
  }
}

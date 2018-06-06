import {  ASSETS_REQUEST, ASSETS_SUCCESS, ASSETS_FAIL } from './../actions/wallets.action';
import { StatusPopupTypes } from '../actions/statusPopup.action';

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  data: []
};

// tslint:disable-next-line: no-any
export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {

    case ASSETS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case ASSETS_SUCCESS: {
      const data = action.payload && action.payload.assets ? action.payload.assets : [];

      return {
        ...state,
        isLoading: false,
        data
      };
    }

    case ASSETS_FAIL: {
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

import {PURCHASE_REQUEST, PURCHASE_SUCCESS, PURCHASE_FAIL} from './../actions/purchase.action';

export const initialState: PurchaseState = {
  isLoading: false,
  isLoaded: false,
  data: []
};

// tslint:disable-next-line: no-any
export function reducer(state: any = initialState, action: { type: string, payload?: any }): any {
  switch (action.type) {

    case PURCHASE_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case PURCHASE_SUCCESS: {
      const data = Array.isArray(action.payload) ? [...action.payload] : [];

      return {
        ...state,
        isLoading: false,
        data
      };
    }

    case PURCHASE_FAIL: {
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

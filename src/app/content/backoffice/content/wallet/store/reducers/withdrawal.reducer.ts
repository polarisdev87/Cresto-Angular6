import {
  CALCULATE_WITHDRAWAL_FEE_FAIL,
  CALCULATE_WITHDRAWAL_FEE_REQUEST,
  CALCULATE_WITHDRAWAL_FEE_SUCCESS,
  CLEAR_WITHDRAWAL
} from './../actions/withdrawal.action';

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  error: null,
  data: {
    fee: 0,
    total: 0,
    available: 0
  }
};

export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {

    case CALCULATE_WITHDRAWAL_FEE_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case CALCULATE_WITHDRAWAL_FEE_SUCCESS: {
      if (!action.payload) {
        return {
          ...state,
          error: 'Wallet not found'
        };
      }
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    }

    case CALCULATE_WITHDRAWAL_FEE_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
      };
    }

    case CLEAR_WITHDRAWAL: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

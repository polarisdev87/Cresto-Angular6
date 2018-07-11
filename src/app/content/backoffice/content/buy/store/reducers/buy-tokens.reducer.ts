import { BUY_TOKENS_FAIL, BUY_TOKENS_SUCCESS, CALCULATE_SUMM_SUCCESS } from '../actions/buy-tokens.action';

export const initialState = {
  price: 0,
  error: null
};

export function reducer(
  state: any = initialState,
  action: any
): any {
  switch (action.type) {

    case CALCULATE_SUMM_SUCCESS: {
      return {
        ...state,
        price: action.payload
      };
    }

    case BUY_TOKENS_SUCCESS: {
      return {
        ...state,
      };
    }

    case BUY_TOKENS_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

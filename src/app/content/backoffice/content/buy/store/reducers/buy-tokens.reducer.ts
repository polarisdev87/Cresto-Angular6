import { BUY_TOKENS_FAIL, BUY_TOKENS_SUCCESS, CALCULATE_SUMM_SUCCESS } from '../actions/buy-tokens.action';

export const initialState = {
  price: 0,
  price_usd: 0,
  error: null,
  firstPurchase: false
};

export function reducer(
  state: any = initialState,
  action: any
): any {
  switch (action.type) {

    case CALCULATE_SUMM_SUCCESS: {
      return {
        ...state,
        price: action.payload.price,
        price_usd: action.payload.price_usd
      };
    }

    case BUY_TOKENS_SUCCESS: {
      return {
        ...state,
        firstPurchase: action.payload && parseInt(action.payload.first_purchases) === 1
      };
    }

    case BUY_TOKENS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

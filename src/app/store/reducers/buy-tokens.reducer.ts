import { CALCULATE_SUMM_SUCCESS, BUY_TOKENS_SUCCESS, BUY_TOKENS_FAIL } from './../actions/buy-token.action';
import * as fromActions from '../actions';

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
      alert('Max or Min value exeeded');
      return {
        ...state,
        error: 'Max or Min value exeeded or not_enough_funds'
      };
    }

    default: {
      return state;
    }
  }
}

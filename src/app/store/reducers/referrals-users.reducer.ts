import { GET_REFERRAL_USERS, GET_REFERRAL_USERS_FAIL, GET_REFERRAL_USERS_SUCCESS } from '../actions';

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  data: []
};

export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case GET_REFERRAL_USERS: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_REFERRAL_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }
    case GET_REFERRAL_USERS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    default: {
      return state;
    }
  }
}

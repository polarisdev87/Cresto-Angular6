import { GET_REFERRAL_USERS, GET_REFERRAL_USERS_FAIL, GET_REFERRAL_USERS_SUCCESS } from '../actions';

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  user: []
};

export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case GET_REFERRAL_USERS: {
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    }

    case GET_REFERRAL_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: []
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

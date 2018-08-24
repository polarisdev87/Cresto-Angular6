import {
  GET_REFERRAL_USERS, GET_REFERRAL_USERS_FAIL,
  GET_REFERRAL_USERS_SUCCESS
} from '../actions/referrals-users.action';

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  data: [],
  total: 0
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
        data: action.payload.referrals,
        total: action.payload.totalBonus
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

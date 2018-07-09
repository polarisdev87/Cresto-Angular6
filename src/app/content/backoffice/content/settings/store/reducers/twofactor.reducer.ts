import {
  DELETE_TWOFACTOR,
  DELETE_TWOFACTOR_FAIL,
  DELETE_TWOFACTOR_SUCCESS,
  TWOFACTOR_SETUP,
  TWOFACTOR_SETUP_FAIL,
  TWOFACTOR_SETUP_SUCCESS,
  VERIFY_TWOFACTOR,
  VERIFY_TWOFACTOR_FAIL,
  VERIFY_TWOFACTOR_SUCCESS
} from './../actions/twofactor.actions';

export interface TwoFactorState {
  twoFactor: boolean;
  isLoading: boolean;
  isLoaded: boolean;
  tfaData: {
    tempToken: string;
    tempSecret: string;
    dataURL: string;
    otpURL: string;
  };
}
export const initialState: TwoFactorState = {
  isLoading: false,
  isLoaded: false,
  twoFactor: false,
  tfaData: null
};

// tslint:disable-next-line: no-any
export function reducer(state: TwoFactorState = initialState, action: any): TwoFactorState {
  switch (action.type) {

    case VERIFY_TWOFACTOR:
    case TWOFACTOR_SETUP:
    case DELETE_TWOFACTOR: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case TWOFACTOR_SETUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        tfaData: action.payload
      };
    }

    case TWOFACTOR_SETUP_SUCCESS:
    case DELETE_TWOFACTOR_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }

    case VERIFY_TWOFACTOR_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        twoFactor: true
      };
    }

    case VERIFY_TWOFACTOR_FAIL:
    case TWOFACTOR_SETUP_FAIL:
    case DELETE_TWOFACTOR_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        // twoFactor: true
      };
    }

    default:
      return state;
  }
}

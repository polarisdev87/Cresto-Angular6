import { TWO_FACTOR_LOGIN } from './../actions/auth.action';
import {
  DELETE_TWOFACTOR_SUCCESS,
  TWOFACTOR_SETUP_SUCCESS,
  VERIFY_TWOFACTOR_SUCCESS,
} from '../actions/twofactor.action';
import * as fromAuth from '../actions/auth.action';
import * as fromSettingsActions from '../actions/personal-info.actions';

export const initialState: AuthState = {
  isLogged: false,
  user: {},
  loaded: false,
  loading: false,
  loginError: '',
  signUpError: ''
};

// tslint:disable-next-line: no-any
export function reducer(state: AuthState = initialLoggedState(), action: any): AuthState {
  switch (action.type) {

    case TWOFACTOR_SETUP_SUCCESS:
    case DELETE_TWOFACTOR_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    }

    case fromAuth.SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }

    case fromAuth.LOGIN:
    case TWO_FACTOR_LOGIN: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAuth.LOGIN_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        isLogged: true,
        loginError: '',
        signUpError: '',
        user: action.payload,
      };
    }

    case fromAuth.TWO_FACTOR_LOGIN_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        isLogged: true,
        loginError: '',
        signUpError: '',
        user: action.payload,
      };
    }

    case VERIFY_TWOFACTOR_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          tfa: true
        }
      };
    }

    case fromAuth.LOGIN_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
        loginError: action.payload.error.error,
        signUpError: ''
      };
    }

    case fromAuth.SIGN_UP: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAuth.SIGN_UP_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
        loginError: '',
        signUpError: action.payload.error.error
      };
    }

    case fromSettingsActions.EDIT_PERSONAL_INFO_SUCCESS: {
      return {
        ...state,
        user: action.payload
      };
    }

    case fromAuth.LOGOUT_SUCCESS: {
      return {
        ...initialState
      };
    }

    default: {
      return state;
    }
  }
}

function initialLoggedState(): AuthState {
  try {
    const token: string = JSON.parse(localStorage.getItem('token') as string);

    return {
      ...initialState,
      isLogged: token ? true : false
    };
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
    localStorage.removeItem('token');
    return {
      ...initialState,
      isLogged: false
    };
  }
}

import { SIGN_UP_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, SIGN_UP, SIGN_UP_FAIL, LOGOUT_SUCCESS, LOGIN } from '../actions/auth.action';

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


    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }

    case LOGIN: {
      return {
        ...state,
        loading: true
      };
    }

    case LOGIN_SUCCESS: {
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

    case LOGIN_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
        loginError: action.payload,
        signUpError: ''
      };
    }

    case SIGN_UP: {
      return {
        ...state,
        loading: true
      };
    }

    case SIGN_UP_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
        loginError: '',
        signUpError: action.payload
      };
    }


    case LOGOUT_SUCCESS: {
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

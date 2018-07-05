import { ROUNDS_REQUEST, ROUNDS_SUCCESS, ROUNDS_FAIL } from '../actions/rounds.actions';

export const initialState: any = {
  isLoading: false,
  isLoaded: false,
  data: []
};

// tslint:disable-next-line: no-any
export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {

    case ROUNDS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case ROUNDS_SUCCESS: {
      const data = action.payload && action.payload.rounds ? action.payload.rounds : [];

      return {
        ...state,
        isLoading: false,
        data
      };
    }

    case ROUNDS_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
      };
    }

    default: {
      return state;
    }
  }
}

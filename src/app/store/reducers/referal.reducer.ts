import { SET_REFERAL_LINK } from "../actions";

export const initialState = '';

export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case SET_REFERAL_LINK: {
      return action.payload
    }

    default: {
      return state;
    }
  }
}

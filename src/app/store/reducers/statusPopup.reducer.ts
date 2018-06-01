import { StatusPopupTypes } from '../actions/statusPopup.action';

export const initialState: StatusPopup = {
  isOpen: false,
  type: '',
  message: ''
};

// tslint:disable-next-line: no-any
export function reducer(state: any = initialState, action: any): any {
  switch (action.type) {

    case StatusPopupTypes.OpenStatusPopup: {
      const { type, message} = action.payload;
      return {
        ...state,
        isOpen: true,
        type,
        message
      };
    }

    case StatusPopupTypes.CloseStatusPopup: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

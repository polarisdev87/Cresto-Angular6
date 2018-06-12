import { WALLET_REQUEST, WALLET_SUCCESS, WALLET_FAIL, GENERATE_WALLET_ADDRESS_SUCCESS } from './../actions/wallets.action';

export const initialState: WalletState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  generatedAddress: null
};

// tslint:disable-next-line: no-any
export function reducer(state: any = initialState, action: { type: string, payload?: any }): any {
  switch (action.type) {

    case WALLET_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case WALLET_SUCCESS: {
      const data = action.payload && action.payload.wallets ? action.payload.wallets : [];

      return {
        ...state,
        isLoading: false,
        data
      };
    }

    case WALLET_FAIL: {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
      };
    }

    case GENERATE_WALLET_ADDRESS_SUCCESS: {
      const data = state.data.slice();
      const index: number = data.findIndex((item: WalletData) => item.id === action.payload.wallet_id);
      data[index] = {...data[index], top_up_address: action.payload.address };

      return {
        ...state,
        data,
        generatedAddress: action.payload.address
      };
    }

    default: {
      return state;
    }
  }
}

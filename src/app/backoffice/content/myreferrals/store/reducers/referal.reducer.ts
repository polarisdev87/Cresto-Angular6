import {SET_REFERAL_LINK} from '../actions/referal.action';

export function reducer(state: any = initialState(), action: any): any {
  switch (action.type) {
    case SET_REFERAL_LINK: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

function initialState(): string {
  try {
    const referralHash: string = JSON.parse(localStorage.getItem('referralHash') as string);
    return referralHash || '';
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
    return '';
  }
}

import {ActionReducerMap} from '@ngrx/store';
import * as fromReferral from './referal.reducer';
import * as fromReferralUsers from './referrals-users.reducer';

// TODO dont dublicate state type, extend interface
export interface IRootState {
  referral: any;
  referralUsers: any;
}

export const reducers: ActionReducerMap<IRootState> = {
  referral: fromReferral.reducer,
  referralUsers: fromReferralUsers.reducer
};

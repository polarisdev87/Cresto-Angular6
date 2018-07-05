import { ActionReducerMap } from '@ngrx/store';
import * as fromReferralUsers from './referrals-users.reducer';

// TODO dont dublicate state type, extend interface
export interface IRootState {
  referralUsers: any;
}

export const reducers: ActionReducerMap<IRootState> = {
  referralUsers: fromReferralUsers.reducer
};

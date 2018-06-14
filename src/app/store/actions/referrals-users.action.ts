import { Action } from '@ngrx/store';

export const GET_REFERRAL_USERS = '[Referrals] GET_REFERRAL_USERS ..';
export const GET_REFERRAL_USERS_SUCCESS = '[Referrals] GET_REFERRAL_USERS_SUCCESS SUCCESS';
export const GET_REFERRAL_USERS_FAIL = '[Referrals] GET_REFERRAL_USERS_FAIL FAIL';

export class GetReferralUsers implements Action {
  public readonly type: string = GET_REFERRAL_USERS;
}

export class GetReferralUsersSuccess implements Action {
  public readonly type: string = GET_REFERRAL_USERS_SUCCESS;
  public constructor(public payload: User) {
  }
}

export class GetReferralUsersError implements Action {
  public readonly type: string = GET_REFERRAL_USERS_FAIL;

  public constructor(public payload: Error) {
  }
}

export type referralsUsersAction = GetReferralUsers
  | GetReferralUsersSuccess
  | GetReferralUsersError;

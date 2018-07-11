import { Action } from '@ngrx/store';

export const GET_REFERRAL_USERS = '[Referrals] GET_REFERRAL_USERS ..';
export const GET_REFERRAL_USERS_SUCCESS = '[Referrals] GET_REFERRAL_USERS SUCCESS';
export const GET_REFERRAL_USERS_FAIL = '[Referrals] GET_REFERRAL_USERS FAIL';

export class GetReferralUsers implements Action {
  public readonly type: string = GET_REFERRAL_USERS;
}

export class GetReferralUsersSuccess implements Action {
  public readonly type: string = GET_REFERRAL_USERS_SUCCESS;
  public constructor(public payload: any) {
  }
}

export class GetReferralUsersFail implements Action {
  public readonly type: string = GET_REFERRAL_USERS_FAIL;
  public constructor(public payload: Error) {
  }
}

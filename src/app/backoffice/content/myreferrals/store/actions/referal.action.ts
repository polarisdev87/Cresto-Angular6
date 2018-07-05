import {Action} from '@ngrx/store';

export const SET_REFERAL_LINK = '[Referrals] SET REFERAL LINK ..';

export class SetReferalLink implements Action {
  public readonly type: string = SET_REFERAL_LINK;

  public constructor(public payload: string) {
  }
}

export type SetReferalActions
  = SetReferalLink;

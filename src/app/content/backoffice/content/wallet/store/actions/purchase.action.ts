import { Action } from '@ngrx/store';

export const PURCHASE_REQUEST = '[PURCHASE] PURCHASE REQUEST';
export const PURCHASE_SUCCESS = '[PURCHASE] PURCHASE Success';
export const PURCHASE_FAIL = '[PURCHASE] PURCHASE Fail';

export class PurchaseRequest implements Action {
  public readonly type: string = PURCHASE_REQUEST;
  public constructor(public payload: string) {} // userId
}

export class PurchaseSuccess implements Action {
  public readonly type: string = PURCHASE_SUCCESS;
  public constructor(public payload: any) {}
}

export class PurchaseFail implements Action {
  public readonly type: string = PURCHASE_FAIL;
  public constructor(public payload: Error) {}
}

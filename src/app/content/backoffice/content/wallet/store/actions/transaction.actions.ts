import { Action } from '@ngrx/store';

export const TRANSACTION_REQUEST = '[WALLET] TRANSACTION REQUEST ..';
export const TRANSACTION_SUCCESS = '[WALLET] TRANSACTION Success';
export const TRANSACTION_FAIL = '[WALLET] TRANSACTION Fail';

export class TransactionRequest implements Action {
  public readonly type: string = TRANSACTION_REQUEST;
  public constructor(public payload: string) {} // userId
}

export class TransactionLoadSuccess implements Action {
  public readonly type: string = TRANSACTION_SUCCESS;
  public constructor(public payload: any) {}
}

export class TransactionLoadFail implements Action {
  public readonly type: string = TRANSACTION_FAIL;
  public constructor(public payload: Error) {}
}

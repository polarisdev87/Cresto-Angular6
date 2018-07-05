import { Action } from '@ngrx/store';

export const WALLET_REQUEST = '[WALLET] WALLET REQUEST ..';
export const WALLET_SUCCESS = '[WALLET] WALLET Success';
export const WALLET_FAIL = '[WALLET] WALLET Fail';

export const TRANSACTION_REQUEST = '[WALLET] TRANSACTION REQUEST ..';
export const TRANSACTION_SUCCESS = '[WALLET] TRANSACTION Success';
export const TRANSACTION_FAIL = '[WALLET] TRANSACTION Fail';


export const GENERATE_WALLET_ADDRESS_REQUEST = '[WALLET] GENERATE_WALLET_ADDRESS REQUEST';
export const GENERATE_WALLET_ADDRESS_SUCCESS = '[WALLET] GENERATE_WALLET_ADDRESS SUCCESS';
export const GENERATE_WALLET_ADDRESS_FAIL = '[WALLET] GENERATE_WALLET_ADDRESS FAIL';


export class WalletRequest implements Action {
  public readonly type: string = WALLET_REQUEST;
  public constructor(public payload: string) {} // userId
}

export class WalletLoadSuccess implements Action {
  public readonly type: string = WALLET_SUCCESS;
  public constructor(public payload: any) {}
}

export class WalletLoadFail implements Action {
  public readonly type: string = WALLET_FAIL;
  public constructor(public payload: Error) {}
}

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


export class GenerateWalletAddressRequest implements Action {
  public readonly type: string = GENERATE_WALLET_ADDRESS_REQUEST;
  public constructor(public payload: GenerateWalletAddress) {}
}

export class GenerateWalletAddressSuccess implements Action {
  public readonly type: string = GENERATE_WALLET_ADDRESS_SUCCESS;
  public constructor(public payload: GenerateWalletAddress) {}
}

export class GenerateWalletAddressFail implements Action {
  public readonly type: string = GENERATE_WALLET_ADDRESS_FAIL;
  public constructor(public payload: Error) {}
}

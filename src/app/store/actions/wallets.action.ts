import { Action } from '@ngrx/store';

export const WALLET_REQUEST = '[WALLET] WALLET REQUEST ..';
export const WALLET_SUCCESS = '[WALLET] WALLET Success';
export const WALLET_FAIL = '[WALLET] WALLET Fail';

export const ASSETS_REQUEST = '[WALLET] ASSETS REQUEST ..';
export const ASSETS_SUCCESS = '[WALLET] ASSETS Success';
export const ASSETS_FAIL = '[WALLET] ASSETS Fail';

export const ROUNDS_REQUEST = '[WALLET] ROUNDS REQUEST ..';
export const ROUNDS_SUCCESS = '[WALLET] ROUNDS Success';
export const ROUNDS_FAIL = '[WALLET] ROUNDS Fail';


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


export class AssetsRequest implements Action {
  public readonly type: string = ASSETS_REQUEST;
}

export class AssetsLoadSuccess implements Action {
  public readonly type: string = ASSETS_SUCCESS;
  public constructor(public payload: any) {}
}

export class AssetsLoadFail implements Action {
  public readonly type: string = ASSETS_FAIL;
  public constructor(public payload: Error) {}
}


export class RoundsRequest implements Action {
  public readonly type: string = ROUNDS_REQUEST;
}

export class RoundsLoadSuccess implements Action {
  public readonly type: string = ROUNDS_SUCCESS;
  public constructor(public payload: any) {}
}

export class RoundsLoadFail implements Action {
  public readonly type: string = ROUNDS_FAIL;
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

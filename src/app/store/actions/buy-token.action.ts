import { Action } from '@ngrx/store';

export const CALCULATE_SUMM_REQUEST = '[BUY TOKENS] CALCULATE_SUMM';
export const CALCULATE_SUMM_SUCCESS = '[BUY TOKENS] CALCULATE_SUCCESS';
export const CALCULATE_SUMM_FAIL = '[BUY TOKENS] CALCULATE_FAIL';


export const BUY_TOKENS_REQUEST = '[BUY TOKENS] BUY_TOKENS';
export const BUY_TOKENS_SUCCESS = '[BUY TOKENS] BUY_TOKENS_SUCCESS';
export const BUY_TOKENS_FAIL = '[BUY TOKENS] BUY_TOKENS_FAIL';



export class CalculateSumRequest implements Action {
  public readonly type: string = CALCULATE_SUMM_REQUEST;
  public constructor(public payload: CalculateTokensSum) {}
}

export class CalculateSumSuccess implements Action {
  public readonly type: string = CALCULATE_SUMM_SUCCESS;
  public constructor(public payload: number) {}
}

export class CalculateSumFail implements Action {
  public readonly type: string = CALCULATE_SUMM_FAIL;
  public constructor(public payload: Error) {}
}


export class BuyTokensRequest implements Action {
  public readonly type: string = BUY_TOKENS_REQUEST;
  public constructor(public payload: CalculateTokensSum) {}
}

export class BuyTokensSuccess implements Action {
  public readonly type: string = BUY_TOKENS_SUCCESS;
  public constructor(public payload: any) {}
}

export class BuyTokensFail implements Action {
  public readonly type: string = BUY_TOKENS_FAIL;
  public constructor(public payload: Error) {}
}

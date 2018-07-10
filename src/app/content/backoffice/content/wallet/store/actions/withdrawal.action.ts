import { Action } from '@ngrx/store';

export const CALCULATE_WITHDRAWAL_FEE_REQUEST = '[WITHDRAWAL] CALCULATE_WITHDRAWAL_FEE';
export const CALCULATE_WITHDRAWAL_FEE_SUCCESS = '[WITHDRAWAL] CALCULATE_WITHDRAWAL_FEE_SUCCESS';
export const CALCULATE_WITHDRAWAL_FEE_FAIL = '[WITHDRAWAL] CALCULATE_WITHDRAWAL_FEE_FAIL';

export const CLEAR_WITHDRAWAL = '[WITHDRAWAL] CLEAR_WITHDRAWAL';

export const WITHDRAWAL_REQUEST = '[WITHDRAWAL] WITHDRAWAL';
export const WITHDRAWAL_SUCCESS = '[WITHDRAWAL] WITHDRAWAL_SUCCESS';
export const WITHDRAWAL_FAIL = '[WITHDRAWAL] WITHDRAWAL_FAIL';


export class CalculateWithdrawalFeeRequest implements Action {
  public readonly type: string = CALCULATE_WITHDRAWAL_FEE_REQUEST;
  public constructor(public payload: CalculateFee) {}
}

export class CalculateWithdrawalFeeSuccess implements Action {
  public readonly type: string = CALCULATE_WITHDRAWAL_FEE_SUCCESS;
  public constructor(public payload: WithdrawalRes) {}
}

export class CalculateWithdrawalFeeFail implements Action {
  public readonly type: string = CALCULATE_WITHDRAWAL_FEE_FAIL;
  public constructor(public payload: Error) {}
}


export class ClearWithdrawal implements Action {
  public readonly type: string = CLEAR_WITHDRAWAL;
}


export class WithdrawalRequest implements Action {
  public readonly type: string = WITHDRAWAL_REQUEST;
  public constructor(public payload: WithdrawalBody) {}
}

export class WithdrawalSuccess implements Action {
  public readonly type: string = WITHDRAWAL_SUCCESS;
  public constructor(public payload: any) {}
}

export class WithdrawalFail implements Action {
  public readonly type: string = WITHDRAWAL_FAIL;
  public constructor(public payload: Error) {}
}

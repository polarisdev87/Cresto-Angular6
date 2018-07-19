import { Action } from '@ngrx/store';

export const ROUNDS_REQUEST = '[ROUNDS] ROUNDS REQUEST ..';
export const ROUNDS_SUCCESS = '[ROUNDS] ROUNDS Success';
export const ROUNDS_FAIL = '[ROUNDS] ROUNDS Fail';


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


import { Action } from '@ngrx/store';

export const ASSETS_REQUEST = '[ASSETS] ASSETS REQUEST ..';
export const ASSETS_SUCCESS = '[ASSETS] ASSETS Success';
export const ASSETS_FAIL = '[ASSETS] ASSETS Fail';


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

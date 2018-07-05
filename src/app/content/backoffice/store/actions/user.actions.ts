import { Action } from '@ngrx/store';

export const GET_CURRENT_USER = '[User] GET_CURRENT_USER ..';
export const GET_CURRENT_USER_SUCCESS = '[User] GET_CURRENT_USER SUCCESS';
export const GET_CURRENT_USER_FAIL = '[User] GET_CURRENT_USER FAIL';


export class GetCurrentUser implements Action {
  public readonly type: string = GET_CURRENT_USER;
}

export class GetCurrentUserSuccess implements Action {
  public readonly type: string = GET_CURRENT_USER_SUCCESS;
  public constructor(public payload: User) { }
}


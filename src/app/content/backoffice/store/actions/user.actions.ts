import { Action } from '@ngrx/store';

export const GET_CURRENT_USER = '[User] GET_CURRENT_USER ..';
export const GET_CURRENT_USER_SUCCESS = '[User] GET_CURRENT_USER SUCCESS';
export const GET_CURRENT_USER_FAIL = '[User] GET_CURRENT_USER FAIL';

export const EDIT_USER = '[User] EDIT_USER ..';
export const EDIT_USER_SUCCESS = '[User] EDIT_USER SUCCESS';
export const EDIT_USER_FAIL = '[User] EDIT_USER FAIL';

export class GetCurrentUser implements Action {
  public readonly type: string = GET_CURRENT_USER;
}

export class GetCurrentUserSuccess implements Action {
  public readonly type: string = GET_CURRENT_USER_SUCCESS;
  public constructor(public payload: User) { }
}

export class GetCurrentUserFail implements Action {
  public readonly type: string = EDIT_USER_FAIL;
  public constructor(public payload: any) { }
}

export class EditUserRequest implements Action {
  public readonly type: string = EDIT_USER;
  public constructor(public payload: UserToEdit) { }
}

export class EditUserSuccess implements Action {
  public readonly type: string = EDIT_USER_SUCCESS;
  public constructor(public payload: UserToEdit) { }
}

export class EditUserFail implements Action {
  public readonly type: string = EDIT_USER_FAIL;
  public constructor(public payload: any) { }
}

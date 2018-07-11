import { Action } from '@ngrx/store';

export const CHECK_USER_PASSWORD = '[Password] CHECK_USER_PASSWORD';
export const CHECK_USER_PASSWORD_SUCCESS = '[Password] CHECK_USER_PASSWORD_SUCCESS';
export const CHECK_USER_PASSWORD_FAIL = '[Password] CHECK_USER_PASSWORD_FAIL';


export const EDIT_USER_PASSWORD = '[Password] EDIT_USER_PASSWORD';
export const EDIT_USER_PASSWORD_SUCCESS = '[Password] EDIT_USER_PASSWORD_SUCCESS';
export const EDIT_USER_PASSWORD_FAIL = '[Password] EDIT_USER_PASSWORD_FAIL';

export class EditUserPassword implements Action {
  public readonly type: string = EDIT_USER_PASSWORD;
  public constructor(public payload: EditPasswordData) {}
}

export class EditUserPasswordSuccess implements Action {
  public readonly type: string = EDIT_USER_PASSWORD_SUCCESS;
  public constructor(public payload: User) {}
}

export class EditUserPasswordFail implements Action {
  public readonly type: string = EDIT_USER_PASSWORD_FAIL;
  public constructor(public payload: any) {}
}


export class CheckUserPassword implements Action {
  public readonly type: string = CHECK_USER_PASSWORD;
  public constructor(public payload: EditPasswordData) {}
}

export class CheckUserPasswordSuccess implements Action {
  public readonly type: string = CHECK_USER_PASSWORD_SUCCESS;
  public constructor(public payload: boolean) {}
}

export class CheckUserPasswordFail implements Action {
  public readonly type: string = CHECK_USER_PASSWORD_FAIL;
  public constructor(public payload: any) {}
}

export type PasswordActions = EditUserPassword
  | EditUserPasswordSuccess
  | EditUserPasswordFail
  | CheckUserPassword
  | CheckUserPasswordSuccess
  | CheckUserPasswordFail;


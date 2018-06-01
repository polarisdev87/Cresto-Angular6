import { Action } from '@ngrx/store';

export const EDIT_USER_PASSWORD = '[Password] EDIT_USER_PASSWORD';
export const EDIT_USER_PASSWORD_SUCCESS = '[Password] EDIT_USER_PASSWORD_SUCCESS';
export const EDIT_USER_PASSWORD_FAIL = '[Password] EDIT_USER_PASSWORD_FAIL';

export class EditUserPassword implements Action {
  public readonly type: string = EDIT_USER_PASSWORD;
  public constructor(public payload: PasswordData) {}
}

// tslint:disable-next-line: max-classes-per-file
export class EditUserPasswordSuccess implements Action {
  public readonly type: string = EDIT_USER_PASSWORD_SUCCESS;
  public constructor(public payload: User) {}
}

// tslint:disable-next-line: max-classes-per-file
export class EditUserPasswordFail implements Action {
  public readonly type: string = EDIT_USER_PASSWORD_FAIL;
  public constructor(public payload: Error) {}
}

export type PasswordActions = EditUserPassword | EditUserPasswordSuccess | EditUserPasswordFail;

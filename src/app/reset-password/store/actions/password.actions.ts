import { Action } from '@ngrx/store';

export const SET_PASSWORD = '[Auth] SET_PASSWORD ..';
export const SET_PASSWORD_SUCCESS = '[Auth] SET_PASSWORD_SUCCESS';
export const SET_PASSWORD_FAIL = '[Auth] SET_PASSWORD_FAIL';

export const SEND_RESET_PASSWORD_EMAIL = '[Auth] SEND_RESET_PASSWORD_EMAIL ..';
export const SEND_RESET_PASSWORD_EMAIL_SUCCESS = '[Auth] SEND_RESET_PASSWORD_EMAIL_SUCCESS ..';
export const SEND_RESET_PASSWORD_EMAIL_FAIL = '[Auth] SEND_RESET_PASSWORD_EMAIL_FAIL ..';

// tslint:disable-next-line
export class SetPassword implements Action {
  public readonly type: string = SET_PASSWORD;
  public constructor(public payload: PasswordData) { }
}

// tslint:disable-next-line
export class SetPasswordSuccess implements Action {
  public readonly type: string = SET_PASSWORD_SUCCESS;
  public constructor(public payload: boolean) { }
}

// tslint:disable-next-line
export class SetPasswordFail implements Action {
  public readonly type: string = SET_PASSWORD_SUCCESS;
  public constructor(public payload: boolean) { }
}

// tslint:disable-next-line
export class SendResetPasswordEmail implements Action {
  public readonly type: string = SEND_RESET_PASSWORD_EMAIL;
  public constructor(public payload: string) { }
}

// tslint:disable-next-line
export class SendResetPasswordEmailSuccess implements Action {
  public readonly type: string = SEND_RESET_PASSWORD_EMAIL_SUCCESS;
  public constructor(public payload: boolean) { }
}

// tslint:disable-next-line
export class SendResetPasswordEmailFail implements Action {
  public readonly type: string = SEND_RESET_PASSWORD_EMAIL_FAIL;
  public constructor(public payload: Error) { }
}

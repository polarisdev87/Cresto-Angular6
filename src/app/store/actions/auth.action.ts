/* tslint:disable */
import { Action } from '@ngrx/store';

export const LOGIN: string = '[Auth] LOGIN ..';
export const LOGIN_SUCCESS: string = '[Auth] LOGIN Success';
export const LOGIN_FAIL: string = '[Auth] LOGIN Fail';

export const SIGN_UP: string = '[Auth] SIGN_UP ..';
export const SIGN_UP_SUCCESS: string = '[Auth] SIGN_UP Success';
export const SIGN_UP_FAIL: string = '[Auth] SIGN_UP Fail';

export const LOGOUT: string = '[Auth] LOGOUT ..';
export const LOGOUT_SUCCESS: string = '[Auth] LOGOUT Success';
export const LOGOUT_FAIL: string = '[Auth] LOGOUT Fail';

export const FACEBOOK_LOGIN = '[Auth Social] Facebook Login ...';
export const FACEBOOK_LOGIN_SUCCESS = '[Auth Social] Facebook Login Sucess';
export const FACEBOOK_LOGIN_FAIL = '[Auth Social] Facebook Login Fail';

export const GOOGLE_LOGIN = '[Auth Social] GOOGLE Login ...';
export const GOOGLE_LOGIN_SUCCESS = '[Auth Social] GOOGLE Login Sucess';
export const GOOGLE_LOGIN_FAIL = '[Auth Social] GOOGLE Login Fail';


/* LOGIN */
// tslint:disable-next-line: max-classes-per-file
export class Login implements Action {
  public readonly type: string = LOGIN;
  public constructor(public payload: any) {}
}

// tslint:disable-next-line: max-classes-per-file
export class LoginSuccess implements Action {
  public readonly type: string = LOGIN_SUCCESS;
  public constructor(public payload: User) {}
}

// tslint:disable-next-line: max-classes-per-file
export class LoginFail implements Action {
  public readonly type: string = LOGIN_FAIL;
  public constructor(public payload: Error) {}
}

/* SIGN UP */
// tslint:disable-next-line: max-classes-per-file
export class SignUp implements Action {
  public readonly type: string = SIGN_UP;
  public constructor(public payload: UserToCreate) {}
}

// tslint:disable-next-line: max-classes-per-file
export class SignUpSuccess implements Action {
  public readonly type: string = SIGN_UP_SUCCESS;
  public constructor(public payload: User) {}
}

// tslint:disable-next-line: max-classes-per-file
export class SignUpFail implements Action {
  public readonly type: string = SIGN_UP_FAIL;
  public constructor(public payload: Error) {}
}

/* LOG OUT */
// tslint:disable-next-line: max-classes-per-file
export class Logout implements Action {
  public readonly type: string = LOGOUT;
}

// tslint:disable-next-line: max-classes-per-file
export class LogoutSuccess implements Action {
  public readonly type: string = LOGOUT_SUCCESS;

}

// tslint:disable-next-line: max-classes-per-file
export class LogoutFail implements Action {
  public readonly type: string = LOGOUT_FAIL;
}

export class FacebookLogin implements Action {
  public readonly type: string = FACEBOOK_LOGIN;
}

export class FacebookLoginSuccess implements Action {
  public readonly type: string = FACEBOOK_LOGIN_SUCCESS;
  public constructor(public payload: any) {}
}

export class FacebookLoginFail implements Action {
  public readonly type: string = FACEBOOK_LOGIN_FAIL;
  public constructor(public payload: any) {}
}


export class GoogleLogin implements Action {
  public readonly type: string = GOOGLE_LOGIN;
}

export class GoogleLoginSuccess implements Action {
  public readonly type: string = GOOGLE_LOGIN_SUCCESS;
  public constructor(public payload: any) {}
}

export class GoogleLoginFail implements Action {
  public readonly type: string = GOOGLE_LOGIN_FAIL;
  public constructor(public payload: any) {}
}

export type AuthActions
  = Login
  | LoginSuccess
  | LoginFail
  | SignUp
  | SignUpSuccess
  | SignUpFail
  | Logout
  | LogoutSuccess
  | LogoutFail;

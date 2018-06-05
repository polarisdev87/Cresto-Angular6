import { Action } from '@ngrx/store';

export const FACEBOOK_LOGIN = '[Auth Social] Facebook Login ...';
export const FACEBOOK_LOGIN_SUCCESS = '[Auth Social] Facebook Login Sucess';
export const FACEBOOK_LOGIN_FAIL = '[Auth Social] Facebook Login Fail';

export const GOOGLE_LOGIN = '[Auth Social] GOOGLE Login ...';
export const GOOGLE_LOGIN_SUCCESS = '[Auth Social] GOOGLE Login Sucess';
export const GOOGLE_LOGIN_FAIL = '[Auth Social] GOOGLE Login Fail';


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


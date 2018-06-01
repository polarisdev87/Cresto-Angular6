import { Action } from '@ngrx/store';

export const EDIT_PERSONAL_INFO = '[PersonalInfo] EDIT_PERSONAL_INFO';
export const EDIT_PERSONAL_INFO_SUCCESS = '[PersonalInfo] EDIT_PERSONAL_INFO_SUCCESS';
export const EDIT_PERSONAL_INFO_FAIL = '[PersonalInfo] EDIT_PERSONAL_INFO_FAIL';

export class EditPersonalInfo implements Action {
  public readonly type: string = EDIT_PERSONAL_INFO;
  public constructor(public payload: User) {}
}

// tslint:disable-next-line: max-classes-per-file
export class EditPersonalInfoSuccess implements Action {
  public readonly type: string = EDIT_PERSONAL_INFO_SUCCESS;
  public constructor(public payload: User) {}
}

export type PersonalInfoActions = EditPersonalInfo;

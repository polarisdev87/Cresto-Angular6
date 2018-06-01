import { Action } from '@ngrx/store';

export enum StatusPopupTypes {
  OpenStatusPopup = '[StatusPopup] Open',
  CloseStatusPopup = '[StatusPopup] Close',
}

export class OpenStatusPopup implements Action {
  public readonly type: string = StatusPopupTypes.OpenStatusPopup;
  public constructor(public payload: {type: string, message: string}) {}
}
// tslint:disable-next-line: max-classes-per-file
export class CloseStatusPopup implements Action {
  public readonly type: string = StatusPopupTypes.CloseStatusPopup;
}

export type StatusPopupActions
  = OpenStatusPopup
  | CloseStatusPopup;


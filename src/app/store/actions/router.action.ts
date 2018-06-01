import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export class Go implements Action {
  public readonly type: string = GO;
  public constructor(public payload: IRouterPayload) {}
}

// tslint:disable-next-line: max-classes-per-file
export class Back implements Action {
  public readonly type: string = BACK;
}

// tslint:disable-next-line: max-classes-per-file
export class Forward implements Action {
  public readonly type: string = FORWARD;
}

export interface IRouterPayload {
  // tslint:disable-next-line: no-any
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export type RouterActions = Go | Back | Forward;


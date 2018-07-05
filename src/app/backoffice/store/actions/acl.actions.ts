import { Action } from '@ngrx/store';

export const ACL_REQUEST = '[Acl] ACL REQUEST ..';
export const ACL_SUCCESS = '[Acl] ACL Success';
export const ACL_FAIL = '[Acl] ACL Fail';

// tslint:disable-next-line: max-classes-per-file
export class AclRequest implements Action {
  public readonly type: string = ACL_REQUEST;
}

// tslint:disable-next-line: max-classes-per-file
export class LoadAclSuccess implements Action {
  public readonly type: string = ACL_SUCCESS;
  public constructor(public payload: Acl) {}
}

// tslint:disable-next-line: max-classes-per-file
export class LoadAclFail implements Action {
  public readonly type: string = ACL_FAIL;
  public constructor(public payload: Error) {}
}


export type AclActions
  = AclRequest
  | LoadAclSuccess
  | LoadAclFail;

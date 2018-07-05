
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap  } from 'rxjs/operators';
import { AclService } from '../../acl.service';
import { ACL_REQUEST, LoadAclSuccess, LoadAclFail } from '../actions/acl.actions';

@Injectable()
export class AclEffects {

  @Effect()
  public loadAclMap$: Observable<Action> = this.actions$
    .ofType(ACL_REQUEST).pipe(
      switchMap(() => this._aclService.getAclMap().pipe(
        map((aclMap: Acl) => new LoadAclSuccess(aclMap)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new LoadAclFail(err));
        })
      )),
    );


  public constructor(
    private actions$: Actions,
    private _aclService: AclService,
  ) {}
}

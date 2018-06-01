import { AclService } from '../../shared/services/acl.service';
import * as AclActions from '../actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap  } from 'rxjs/operators';

@Injectable()
export class AclEffects {

  @Effect()
  public loadAclMap$: Observable<Action> = this.actions$
    .ofType(AclActions.ACL_REQUEST).pipe(
      switchMap(() => this._aclService.getAclMap().pipe(
        map((aclMap: Acl) => new AclActions.LoadAclSuccess(aclMap)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new AclActions.LoadAclFail(err));
        })
      )),
    );


  public constructor(
    private actions$: Actions,
    private _aclService: AclService,
  ) {}
}

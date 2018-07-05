import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';
import {of} from 'rxjs';
import {filter, switchMap, take} from 'rxjs/operators';
import {isEmpty} from 'lodash';
import {Route} from '@angular/compiler/src/core';

@Injectable()
export class AccessGuardService implements CanLoad {

  public constructor(
    private _store: Store<StoreStates>,
  ) {
  }

  public canLoad(route: Route) {
    const url: string = (route as any).path;

    return this._store.select('backoffice', 'acl').pipe(
      take(1),
      filter((acl: AclState) => !isEmpty(acl)),
      switchMap((acl: AclState) => {
        return of(Object.keys(acl).includes(url));
      }),
    );

  }
}

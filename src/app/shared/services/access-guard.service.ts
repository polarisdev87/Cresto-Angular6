import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanLoad, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { isEmpty } from 'lodash';
import { isLoggedSelector } from '../../store/selectors';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AccessGuardService implements CanLoad {

  public constructor(
    private _store: Store<StoreStates>,
    private _router: Router,
  ) {}

  public canLoad(route: Route) {
    const url: string = (route as any).path;
    console.log(url);

    return this._store.select('acl').pipe(
      take(1),
      filter((acl: AclState) => !isEmpty(acl)),
      switchMap((acl: AclState) => {
        console.log(23424234, Object.keys(acl).includes(url));
        return of(Object.keys(acl).includes(url));
      }),
    );

  }
}

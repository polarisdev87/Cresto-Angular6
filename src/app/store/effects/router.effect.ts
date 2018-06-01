import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions, Effect } from '@ngrx/effects';
import * as RouterActions from '../actions/router.action';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRouterPayload } from '../actions';

@Injectable()
export class RouterEffects {

  @Effect({ dispatch: false })
  public navigate$: Observable<IRouterPayload> = this.actions$
    .ofType(RouterActions.GO).pipe(
      map((action: RouterActions.Go) => action.payload),
      tap(({ path, query: queryParams, extras }: IRouterPayload) => {
        this.router.navigate(path, { queryParams, ...extras });
      })
    );

  @Effect({ dispatch: false })
  public navigateBack$: Observable<Action> = this.actions$
    .ofType(RouterActions.BACK).pipe(
      tap(() => this.location.back())
    );

  @Effect({ dispatch: false })
  public navigateForward$: Observable<Action> = this.actions$
    .ofType(RouterActions.FORWARD).pipe(
      tap(() => this.location.forward())
    );

  public constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) { }
}

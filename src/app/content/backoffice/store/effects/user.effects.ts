import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { LocalStorageService } from '../../../../shared/services/localStorage.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { GET_CURRENT_USER, GetCurrentUserSuccess } from '../actions/user.actions';

@Injectable()
export class UserEffects {

  @Effect()
  public getCurrentUser$: Observable<Action> = this.actions$
    .ofType(GET_CURRENT_USER).pipe(
      switchMap(() => this._authService.getCurrentUser().pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((data: User) => new GetCurrentUserSuccess(data))
      )),
  );


  public constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
  ) {
  }
}

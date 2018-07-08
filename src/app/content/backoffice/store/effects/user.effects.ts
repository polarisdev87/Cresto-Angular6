import { MatDialog } from '@angular/material';
import { EDIT_USER, EditUserRequest, EditUserSuccess, EditUserFail, GetCurrentUserFail } from './../actions/user.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../../../shared/services/auth.service';
import { GET_CURRENT_USER, GetCurrentUserSuccess } from '../actions/user.actions';
import { SettingsService } from '../../../../shared/services/settings.service';
import { PopupComponent } from '../../content/buy/popup/popup.component';

@Injectable()
export class UserEffects {

  @Effect()
  public getCurrentUser$: Observable<Action> = this.actions$
    .ofType(GET_CURRENT_USER).pipe(
      switchMap(() => this._authService.getCurrentUser().pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((data: User) => new GetCurrentUserSuccess(data)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new GetCurrentUserFail(err));
        })
      )),
  );

  @Effect()
  public editUser$: Observable<Action> = this.actions$
    .ofType(EDIT_USER).pipe(
      map((action: EditUserRequest) => action.payload),
      switchMap((user: UserToEdit) => this._settingsService.editPersonalInfo(user).pipe(
        map((data: UserToCreate) => new EditUserSuccess(data)),
        tap(() => this._dialog.open(PopupComponent, { data: { message: 'Success' } })),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new EditUserFail(err));
        })
      )),
  );

  public constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _settingsService: SettingsService,
    private _dialog: MatDialog,
  ) {
  }
}

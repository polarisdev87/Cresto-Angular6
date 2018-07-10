import { MatDialog } from '@angular/material';
import {
  CheckUserPassword, CheckUserPasswordFail,
  CheckUserPasswordSuccess, EDIT_USER_PASSWORD, EditUserPassword, EditUserPasswordFail, EditUserPasswordSuccess
} from './../actions/edit-pasword.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CHECK_USER_PASSWORD } from '../actions/edit-pasword.actions';
import { SettingsService } from '../../../../../../shared/services/settings.service';
import { PopupComponent } from '../../../buy/popup/popup.component';

@Injectable()
export class EditPasswordEffects {

  @Effect()
  public checkUserPassword$: Observable<Action> = this.actions$
    .ofType(CHECK_USER_PASSWORD).pipe(
      map((action: CheckUserPassword) => action.payload),
      switchMap((passwordData: EditPasswordData) => this._settingsService.checkUserPassword(passwordData).pipe(
        map((data: boolean) => new CheckUserPasswordSuccess(data)),
        catchError((err: Error) => {
          // TODO figure out design for error handling
          this._dialog.open(PopupComponent, { data: { message: 'Current password is not valid' } }),
            // tslint:disable-next-line
            console.log(err);
          return of(new CheckUserPasswordFail(err));
        })
      )),
  );

  @Effect()
  public editUserPassword$: Observable<Action> = this.actions$
    .ofType(EDIT_USER_PASSWORD).pipe(
      map((action: EditUserPassword) => action.payload),
      switchMap((passwordData: EditPasswordData) => this._settingsService.editUserPassword(passwordData).pipe(
        map((user: User) => new EditUserPasswordSuccess(user)),
        tap(() => this._dialog.open(PopupComponent, { data: { message: 'Success' } })),
        catchError((err: any) => {
          const message: string = err && err.error && err.error.error
            ? err.error.error
            : 'Something went wrong';
          this._dialog.open(PopupComponent, { data: { message } }),

            // tslint:disable-next-line
            console.log(err);
          return of(new EditUserPasswordFail(err));
        })
      )),
  );


  public constructor(
    private actions$: Actions,
    private _settingsService: SettingsService,
    private _dialog: MatDialog,
  ) { }
}

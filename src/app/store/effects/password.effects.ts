import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EDIT_USER_PASSWORD, EditUserPassword, EditUserPasswordSuccess, EditUserPasswordFail } from '../actions/password.actions';
import { OpenStatusPopup } from '../actions';
import { SettingsService } from '../../shared/services/settings.service';

@Injectable()
export class PasswordEffects {
  @Effect()
  public editUserPassword$: Observable<Action> = this.actions$
    .ofType(EDIT_USER_PASSWORD).pipe(
      map((action: EditUserPassword) => action.payload),
      switchMap((passwordData: PasswordData) => this._settingsService.editUserPassword(passwordData)),
      switchMap((user: User) => [
        new EditUserPasswordSuccess(user),
        new OpenStatusPopup({type: 'Success', message: 'You successfully change the password'})
      ]),
      catchError((err: Error) => {
        // tslint:disable-next-line
        console.log(err);
        return of(new EditUserPasswordFail(err));
      })
  );

  public constructor(
    private actions$: Actions,
    private _settingsService: SettingsService
  ) { }
}

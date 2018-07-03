import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {OpenStatusPopup} from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EDIT_PERSONAL_INFO, EditPersonalInfo, EditPersonalInfoFail, EditPersonalInfoSuccess} from '../actions/personal-info.actions';
import {SettingsService} from '../../shared/services/settings.service';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PersonalInfoEffects {
  @Effect()
  public editPersonalInfo$: Observable<Action> = this.actions$
    .ofType(EDIT_PERSONAL_INFO).pipe(
      map((action: EditPersonalInfo) => action.payload),
      switchMap((user: User) => this._settingsService.editPersonalInfo(user)),
      switchMap((user: User) => [
        new EditPersonalInfoSuccess(user),
        new OpenStatusPopup({type: 'Success', message: 'You successfully change the info'})
      ]),
      catchError((err: Error) => {
        // tslint:disable-next-line
        console.log(err);
        return of(new EditPersonalInfoFail());
      })
    );

  public constructor(
    private actions$: Actions,
    private _settingsService: SettingsService,
  ) {
  }
}

import { LoginSuccess } from './../actions/auth.action';
import { SocialNetworkService } from './../../shared/services/social-network.service';
import { FacebookLogin, FacebookLoginFail } from './../actions/social-network.action';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromActions from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EDIT_USER_PASSWORD, EditUserPassword, EditUserPasswordSuccess, EditUserPasswordFail } from '../actions/password.actions';
import { OpenStatusPopup } from '../actions';
import { SettingsService } from '../../shared/services/settings.service';
import { FACEBOOK_LOGIN } from '../actions/social-network.action';

@Injectable()
export class SocialNetworkEffects {
  // TODO not working now, fix it, made without effect, jsut call method
  @Effect()
  public facebookLogin$: Observable<Action> = this.actions$
    .ofType(FACEBOOK_LOGIN).pipe(
      switchMap(() => this._socialNetworkService.facebookLogin()),
      switchMap((result: any) => this._socialNetworkService.successFbLogin(result.authResponse.accessToken).pipe(
        map((user: User) => new LoginSuccess(user)),
        catchError((err: Error) => {
          // tslint:disable-next-line
          console.log(err);
          return of(new FacebookLoginFail(err));
        })
      )
    ),

  );

  public constructor(
    private actions$: Actions,
    private _settingsService: SettingsService,
    private _socialNetworkService: SocialNetworkService
  ) { }
}

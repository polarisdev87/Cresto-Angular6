import { AuthService } from './../../shared/services/auth.service';
import { LoginSuccess } from './../actions/auth.action';
import { SocialNetworkService } from './../../shared/services/social-network.service';
import { FacebookLogin, FacebookLoginFail, GOOGLE_LOGIN, GoogleLoginFail } from './../actions/social-network.action';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromActions from '../actions';
import { catchError, tap, map, switchMap } from 'rxjs/operators';
import { EDIT_USER_PASSWORD, EditUserPassword, EditUserPasswordSuccess, EditUserPasswordFail } from '../actions/password.actions';
import { OpenStatusPopup } from '../actions';
import { SettingsService } from '../../shared/services/settings.service';
import { FACEBOOK_LOGIN } from '../actions/social-network.action';
import { Router } from '@angular/router';

@Injectable()
export class SocialNetworkEffects {
  @Effect()
  public facebookLogin$: Observable<Action> = this.actions$
    .ofType(FACEBOOK_LOGIN).pipe(
      switchMap(() => this._socialNetworkService.facebookLogin()),
      switchMap((result: any) => this._socialNetworkService.successFbLogin(result.authResponse.accessToken).pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((user: User) => new LoginSuccess(user)),
        tap(() => this._router.navigate(['/backoffice'])),
        catchError((err: Error) => {
          console.log(err);
          return of(new FacebookLoginFail(err));
        })
      )
    ),

  );

  @Effect()
  public googleLogin$: Observable<Action> = this.actions$
    .ofType(GOOGLE_LOGIN).pipe(
      switchMap(() => this._socialNetworkService.googleSignIn()),
      switchMap((token: string) => this._socialNetworkService.googleSuccessLogin(token).pipe(
        switchMap((user: User) => this._authService.tokenToLocalStorage(user)),
        map((user: User) => new LoginSuccess(user)),
        tap(() => this._router.navigate(['/backoffice'])),
        catchError((err: Error) => {
          console.log(err);
          return of(new GoogleLoginFail(err));
        })
      )
    ),

  );

  public constructor(
    private actions$: Actions,
    private _settingsService: SettingsService,
    private _socialNetworkService: SocialNetworkService,
    private _router: Router,
    private _authService: AuthService,
  ) { }
}

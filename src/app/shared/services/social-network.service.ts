import { HttpService } from './http.service';
import { LoginSuccess } from './../../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
declare var FB: any;
import { from, of, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
const appId: string = environment.facebookConfig.appId;
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  constructor(
    private _store: Store<any>,
    private _http: HttpService,
    private _googleService: AuthService,
  ) {
    (FB as any).init({
      appId,
      status: false, // the SDK will attempt to get info about the current user immediately after init
      cookie: false,  // enable cookies to allow the server to access
      xfbml: false,  //
      version: 'v2.8' // use graph api version 2.5
    });
  }

  facebookLogin(): Observable<any> {
    return from(
      new Promise((resolve, reject) => {
        (FB as any).login((response) => resolve(response), { scope: 'public_profile, email' });
      })
    );
  }

  successFbLogin(access_token): Observable<User> {
    return this._store.select('referral').pipe(
      switchMap((referredBy: string) => {
        return this._http.nonAuthorizedRequest('/facebook', { access_token, referredBy }, 'POST');
      })
    );
  }

  googleSignIn(): Observable<string> {
    return from(new Promise((res, rej) => {
      this._googleService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData: any) => {
        res(userData.token);
      });
    }));
  }

  googleSuccessLogin(access_token: string): Observable<User> {
    return this._store.select('referral').pipe(
      switchMap((referredBy: string) => {
        return this._http.nonAuthorizedRequest('/google', { access_token, referredBy }, 'POST');
      })
    );
  }
}

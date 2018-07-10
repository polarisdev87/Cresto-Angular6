import { LocalStorageService } from './localStorage.service';
import { HttpService } from '../../http.service';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService, GoogleLoginProvider } from 'angular5-social-login';

declare var FB: any;
const appId: string = environment.facebookConfig.appId;

@Injectable()
export class SocialNetworkService {

  public constructor(
    private _http: HttpService,
    private _googleService: AuthService,
    private _localStorageService: LocalStorageService,
  ) {
    (FB as any).init({
      appId,
      status: false, // the SDK will attempt to get info about the current user immediately after init
      cookie: false,  // enable cookies to allow the server to access
      xfbml: false,  //
      version: 'v2.8' // use graph api version 2.5
    });
  }

  public facebookLogin(): Observable<any> {
    return from(
      new Promise((resolve) => {
        (FB as any).login((response) => resolve(response), { scope: 'public_profile, email' });
      })
    );
  }

  public successFbLogin(accessToken): Observable<User> {
    let referredBy = '';
    try {
      referredBy = this._localStorageService.getItem('referralHash');
    } catch (err) {
      // tslint:disable-next-line
      console.log(err);
    }
    return this._http.nonAuthorizedRequest('/facebook', { access_token: accessToken, referredBy }, 'POST');

  }

  public googleSignIn(): Observable<string> {
    return from(new Promise((res) => {
      this._googleService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData: any) => {
        res(userData.token);
      });
    }));
  }

  public googleSuccessLogin(accessToken: string): Observable<User> {
    let referredBy = '';
    try {
      referredBy = this._localStorageService.getItem('referralHash');
    } catch (err) {
      // tslint:disable-next-line
      console.log(err);
    }
    return this._http.nonAuthorizedRequest('/google', { access_token: accessToken, referredBy }, 'POST');
  }
}

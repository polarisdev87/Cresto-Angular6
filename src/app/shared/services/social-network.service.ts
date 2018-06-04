import { HttpService } from './http.service';
import { LoginSuccess } from './../../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
declare var FB: any;
import { from, of, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
const appId: string = environment.facebookConfig.appId;

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  constructor(
    private _ngZone: NgZone,
    private _store: Store<any>,
    private _http: HttpService
  ) {
    (FB as any).init({
      appId,
      status: false, // the SDK will attempt to get info about the current user immediately after init
      cookie: false,  // enable cookies to allow the server to access
      xfbml: false,  //
      version: 'v2.8' // use graph api version 2.5
    });
  }

  fbLogin() {
    return new Promise((resolve, reject) => {
      (FB as any).login(result => {
        if (result.authResponse) {
          return resolve(result.authResponse.accessToken);
        }
        reject();
      }, { scope: 'public_profile, email' });
    }).then((access_token) => {
      console.log(access_token);

      this._ngZone.run(() => {
        return this._http.nonAuthorizedRequest('/facebook', { access_token }, 'POST')
        // return this._http.post(`http://localhost:8090/facebook`, { access_token })
          .subscribe((data) => {
            console.log(data);
          });
      });
    });
  }

  googleLogin(access_token) {
    return this._http.post(`http://localhost:8090/google`, { access_token });
  }


  // TODO implement with effect
  facebookLogin(): Observable<any> {
    return from(
      new Promise((resolve, reject) => {
        (FB as any).login((response) => {
          this._ngZone.run(() => {
            resolve(response);
          });
        }, { scope: 'public_profile, email' });
      })
    );
  }

  successFbLogin(access_token): Observable<User> {
    return this._http.post<User>(`http://localhost:8090/facebook`, { access_token });
  }
}

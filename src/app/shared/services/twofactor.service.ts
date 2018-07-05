import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

@Injectable()
export class TwoFactorService {

  public constructor(private _http: HttpService) { }

  public verifyTwoFactor(body: { token: string }): Observable<boolean> {
    return this._http.authorizedRequest(`/twofactor/verify`, body, 'POST');
  }

  public twoFactorSetup(): Observable<User> {
    return this._http.authorizedRequest(`/twofactor/setup`, '', 'GET');
  }

  public deleteTfoFactor(body: {token: string}): Observable<User> {
    return this._http.authorizedRequest(`/twofactor/delete`, body, 'POST');
  }


}

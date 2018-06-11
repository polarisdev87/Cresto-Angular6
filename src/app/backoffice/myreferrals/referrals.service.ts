import { HttpService } from './../../shared/services/http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RefferralsService {

  constructor(private _http: HttpService) { }

  getReferralLink(): Observable<any> {
    return this._http.authorizedRequest(`/account/referal`, '', 'GET');
  }

}

import { HttpService } from '../../../../http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ReferralsService {
  public constructor(private _http: HttpService) {
  }
  public getReferralsUsers(): Observable<any> {
    return this._http.authorizedRequest(`/account/referrals`, '', 'GET');
  }
}


import { HttpService } from '../../../http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ReferralsService {
  constructor(private _http: HttpService) {
  }
  getReferralsUsers(): Observable<any> {
    return this._http.authorizedRequest(`/account/referrals`, '', 'GET');
  }
}


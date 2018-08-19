import { HttpService } from '../../../../http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  public constructor(private _http: HttpService) {
  }
  public getReferrals(): Observable<any> {
    return this._http.authorizedRequest(`/account/referrals`, '', 'GET');
  }
}


import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

@Injectable()
export class SettingsService {

  public constructor(private _http: HttpService) { }

  public editPersonalInfo(user: UserToEdit): Observable<User> {
    return this._http.authorizedRequest(`/account`, user, 'PUT');
  }

  public editUserPassword(passwordData: EditPasswordData): Observable<User> {
    return this._http.authorizedRequest(`/account/password`, passwordData, 'PUT');
  }

  public checkUserPassword(passwordData: EditPasswordData): Observable<boolean> {
    return this._http.authorizedRequest(`/account/password/check`, passwordData, 'POST');
  }
}

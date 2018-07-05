import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../../http.service';

@Injectable()
export class SettingsService {

  public constructor(private _http: HttpService) { }

  public editPersonalInfo(user: User): Observable<User> {
    return this._http.authorizedRequest(`/account`, user, 'PUT');
  }

  public editUserPassword(passwordData: PasswordData): Observable<User> {
    return this._http.authorizedRequest(`/account/password`, passwordData, 'PUT');
  }
}

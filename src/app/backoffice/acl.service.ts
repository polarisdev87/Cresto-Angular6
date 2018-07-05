import { HttpService } from '../http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AclService {
  public constructor(private _http: HttpService) {
  }

  public getAclMap(): Observable<Acl> {
    return this._http.authorizedRequest('/account/acl', '', 'GET');
  }

}

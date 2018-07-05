import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable()
export class EmailVerificationService {

  public constructor(private _http: HttpService) {
  }

  public checkEmail(verificationToken: string): Observable<User> {
    return this._http.nonAuthorizedRequest('/email/verification', { verificationToken }, 'POST');
  }
}


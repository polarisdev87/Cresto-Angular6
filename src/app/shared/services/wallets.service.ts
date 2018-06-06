import { WalletHttpService } from './wallet-http.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class WalletsService {

  public constructor(private _http: WalletHttpService) { }

  public getUserWallets(userId: string): Observable<any> {
    return this._http.authorizedRequest(`/user/${userId}/wallets`, '', 'GET');
  }

  public assets(): Observable<any> {
    return this._http.authorizedRequest(`/assets`, '', 'GET');
  }

  public transaction(userId: string): Observable<User> {
    return this._http.authorizedRequest(`/user/${userId}/wallets/transactions`, '', 'GET');
  }

  public rounds(): Observable<User> {
    return this._http.authorizedRequest(`/rounds`, '', 'GET');
  }



}

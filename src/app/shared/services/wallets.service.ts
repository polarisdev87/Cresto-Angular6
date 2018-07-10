import { Observable } from 'rxjs';
import { WalletHttpService } from './wallet-http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class WalletsService {

  constructor(private _http: WalletHttpService) { }

  getUserWallets(userId: string): Observable<any> {
    return this._http.authorizedRequest(`/user/${userId}/wallets`, '', 'GET');
  }

  assets(): Observable<any> {
    return this._http.authorizedRequest(`/assets`, '', 'GET');
  }

  transaction(userId: string): Observable<User> {
    return this._http.authorizedRequest(`/user/${userId}/wallets/transactions`, '', 'GET');
  }

  rounds(): Observable<User> {
    return this._http.authorizedRequest(`/rounds`, '', 'GET');
  }

  calculateTokens(data: CalculateTokensSum): Observable<TokenPrice> {
    const {quote_asset_id, amount} = data;
    return this._http.authorizedRequest(`/user/${data.userId}/wallets/calculate_price`, { quote_asset_id, amount }, 'POST');
  }

  buyTokens(data: CalculateTokensSum): Observable<any> {
    const {quote_asset_id, amount} = data;
    return this._http.authorizedRequest(`/user/${data.userId}/wallets/buy`, { quote_asset_id, amount }, 'POST');
  }

  calculateWithdrawalFee(data: CalculateFee): Observable<WithdrawalRes> {
    const {wallet_id, amount} = data;
    return this._http.authorizedRequest(`/user/${data.userId}/wallets/calculate_withdrawal_fee`, { wallet_id, amount }, 'POST');
  }

  withdrawal(data: WithdrawalBody): Observable<WithdrawalRes> {
    const {cstt_address, amount} = data;
    return this._http.authorizedRequest(`/user/${data.userId}/wallets/withdraw`, { cstt_address, amount }, 'POST');
  }

  generateWalletAddress(data: GenerateWalletAddress): Observable<{address: string}> {
    return this._http.authorizedRequest(`/user/${data.userId}/wallets/${data.wallet_id}/generate_address`, '', 'POST');
  }

  getPurchaseData(userId: string): Observable<any> {
    return this._http.authorizedRequest(`/cstt/purchases/${userId}`, '', 'GET');
  }
}

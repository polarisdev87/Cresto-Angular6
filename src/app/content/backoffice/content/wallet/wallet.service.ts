import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Injectable()
export class WalletService {
  public constructor() {
  }

  public calculateWithdrawalData(...sources: Observable<any>[]): Observable<CalculateFee> {
    return combineLatest(
      sources,
      (userId: string, amount: number) => {
        return {
          userId,
          amount
        };
      }
    );
  }


  public withdrawal(...sources: Observable<any>[]): Observable<WithdrawalBody> {
    return combineLatest(
      sources,
      (userId: string, data: { amount: number, address: number, wallet_id }) => {
        const {amount, address, wallet_id} = data;
        return {
          userId,
          address,
          amount,
          wallet_id
        };
      }
    );
  }

}

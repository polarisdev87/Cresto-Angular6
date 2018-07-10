import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

@Injectable()
export class WalletService {
  public constructor() {}

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
      (userId: string, data: { amount: number, cstt_address: number }) => {
        const {amount, cstt_address } = data;
        return {
          userId,
          cstt_address,
          amount
        };
      }
    );
  }

}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transactionsPipe'
})
export class TransactionsPipePipe implements PipeTransform {

  transform(transactions: any[], coin: any): any {
    if (!coin) {
      return transactions;
    }
    return transactions.filter((transaction) => transaction.asset_code === coin.asset.code);
  }

}

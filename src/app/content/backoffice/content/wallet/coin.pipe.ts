import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coin'
})
export class CoinPipe implements PipeTransform {
  // TODO types, check wallets data type
  public transform(coins: any[], coin?: any): any {
    if (!coin) {
      return null;
    }
    return coins.find((c: any) => c.asset.code === coin.asset.code);
  }

}

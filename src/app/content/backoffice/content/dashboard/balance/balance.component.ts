import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRootState } from '../../../../../store/reducers';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.sass']
})
export class BalanceComponent implements OnInit {

  public wallets$!: Observable<any>;
  public assetNames = {
    btc: 'Bitcoin',
    eth: 'Ethereum',
    xmr: 'Monero',
    cstt: 'Crest Token',
    usd: 'USD'
  };
  public constructor(
    private _store: Store<IRootState>
  ) { }

  public ngOnInit() {
    this.wallets$ = this._store.select('backoffice', 'wallets', 'data');
  }

}

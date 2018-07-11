import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { IRootState } from '../../../../store/reducers';
import { TransactionRequest } from './store/actions/transaction.actions';
import { getWalletsData } from '../../store/selectors/assets.selector';
import { PurchaseRequest } from './store/actions/purchase.action';
import { getWalletsListPurchase } from './store/selectors/purchase.selector';
import { getWalletsListTransactions } from './store/selectors/transaction.selector';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

  public assets$!: Observable<any>;
  public wallets$!: Observable<WalletData[]>;
  public transactions$!: Observable<any>;
  public purchase$!: Observable<any>;

  public crestokenBuySellTable = true;
  public currentCoin = false ;
  public withdrawalToched = false;

  public constructor(
    private _store: Store<IRootState>
  ) {
  }

  public ngOnInit() {
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
    this.wallets$ = this._store.select(getWalletsData);
    this.transactions$ = this._store.select(getWalletsListTransactions);
    this.purchase$ = this._store.select( getWalletsListPurchase );

    this._store.select('backoffice', 'user', '_id')
      .pipe(
        filter((id: string | null) => Boolean(id))
      )
      .subscribe((id) => {
        if (id === null) {
          return;
        }
        this._store.dispatch(new TransactionRequest(id));
        this._store.dispatch(new PurchaseRequest(id));
      });
  }

  public setCoin(coin) {
    if (!this.currentCoin) {
      return;
    }
    this.currentCoin = coin;
  }

  public withdrawalTochedActive(coin) {
    if (!this.withdrawalToched) {
      return;
    }
    this.withdrawalToched = coin;
  }

  public outputTable() {
    this.crestokenBuySellTable = false;

  }
}

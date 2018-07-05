import { getAuthUserId } from './../../../../store/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { WalletRequest } from '../../store/actions/wallets.action';
import { IRootState } from '../../../../store/reducers';
import { TransactionRequest } from './store/actions/transaction.actions';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.sass']
})
export class WalletComponent implements OnInit {

  assets$: Observable<any>;
  wallets$: Observable<WalletData[]>;
  transactions$: Observable<any>;

  constructor(
    private _store: Store<IRootState>
  ) {
  }

  ngOnInit() {
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
    this.wallets$ = this._store.select('backoffice', 'wallets', 'data');
    this.transactions$ = this._store.select('walletList', 'transactions', 'data');

    this._store.select(getAuthUserId)
      .pipe(
        filter((id: string | null) => Boolean(id))
      )
      .subscribe((id) => {
        this._store.dispatch(new WalletRequest(id));
        this._store.dispatch(new TransactionRequest(id));
      });
  }
}

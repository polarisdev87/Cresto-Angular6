import { getStateData } from './../../store/selectors/wallets.selector';
import { WalletRequest, AssetsRequest, TransactionRequest } from './../../store/actions/wallets.action';
import { getAuthUserId } from './../../store/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  assets$: Observable<any>;
  wallets$: Observable<any>;
  transaction$: Observable<any>;

  constructor(
    private _store: Store<StoreStates>
  ) { }

  ngOnInit() {
    this.assets$ = this._store.select(getStateData('assets'));
    this.wallets$ = this._store.select(getStateData('wallets'));
    this.transaction$ = this._store.select(getStateData('transaction'));

    this._store.select(getAuthUserId)
    .pipe(
      filter((id: string | null) => Boolean(id))
    )
    .subscribe((id) => {
      this._store.dispatch(new WalletRequest(id));
      this._store.dispatch(new AssetsRequest());
      this._store.dispatch(new TransactionRequest(id));
    });
  }
}

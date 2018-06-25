import { filter } from 'rxjs/operators';
import { getAuthUserId } from './../../store/selectors/auth.selectors';
import { AssetsRequest, WalletRequest } from './../../store/actions/wallets.action';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DepositPopupComponent } from './deposit-popup/deposit-popup.component';
import { getStateData } from '../../store/selectors/wallets.selector';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  @Input()
  wallets;
  currency;

  logos = {
    btc: 'assets/images/bitcoin.png',
    eth: 'assets/images/ether.png',
    cstt: 'assets/images/logo.png'
  };

  assets$: Observable<any>;
  wallets$: Observable<any>;

  constructor(
    private _store: Store<StoreStates>,
    public dialog: MatDialog
  ) {
  }

  openPopup(address) {
    this.dialog.open(DepositPopupComponent, {
      data: {
        address: address
      }
    })
  }

  ngOnInit() {
    this.assets$ = this._store.select(getStateData('assets'));
    this.wallets$ = this._store.select(getStateData('wallets'));

    this._store.select(getAuthUserId)
      .pipe(
        filter((id: string | null) => Boolean(id))
      )
      .subscribe((id) => {
        this._store.dispatch(new WalletRequest(id));
        this._store.dispatch(new AssetsRequest());
      });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DepositPopupComponent } from './deposit-popup/deposit-popup.component';
import { IRootState } from '../../../../store/reducers';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.sass'],

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
  makeDepositLink = {
    name: 'Make deposit',
    class: 'emptyGreen'
  };

  constructor(
    private _store: Store<IRootState>,
    private _dialog: MatDialog
  ) {
  }

  openPopup(address) {
    this._dialog.open(DepositPopupComponent, {
      data: {
        address: address
      }
    });
  }

  ngOnInit() {
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DepositPopupComponent } from './deposit-popup/deposit-popup.component';
import { IRootState } from '../../../../store/reducers';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.sass']

})
export class BuyComponent implements OnInit {
  @Input()
  public wallets;
  public currency;

  public logos = {
    btc: 'assets/images/bitcoin.png',
    eth: 'assets/images/ether.png',
    cstt: 'assets/images/logo.png'
  };

  public assets$!: Observable<any>;
  public wallets$!: Observable<any>;
  public makeDepositLink = {
    name: 'Make deposit',
    class: 'emptyGreen'
  };

  public constructor(
    private _store: Store<IRootState>,
    private _dialog: MatDialog
  ) {
  }

  public openPopup(address) {
    this._dialog.open(DepositPopupComponent, {
      data: {
        address
      }
    });
  }

  public ngOnInit() {
    this.assets$ = this._store.select('backoffice', 'assets', 'data');
  }
}

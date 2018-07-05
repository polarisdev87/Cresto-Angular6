import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DepositModalComponent } from './deposit-modal/deposit-modal.component';
import { WithdrawalModalComponent } from './withdrawal-modal/withdrawal-modal.component';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { GenerateWalletAddressRequest } from '../../../store/actions/wallets.action';
import { IRootState } from '../../../../../store/reducers';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.sass']
})
export class WalletListComponent implements OnInit {
  @Input()
  wallets;

  depositBtnState = {
    name: 'Deposit',
    class: 'emptyGreen'
  };

  withdrawalBtnState = {
    name: 'Withdrawal',
    class: 'emptyRed'
  };

  constructor(
    public dialog: MatDialog,
    private _store: Store<IRootState>,
  ) { }

  ngOnInit() {
    this._store.select('backoffice', 'wallets', 'generatedAddress').pipe(
      filter((address: string) => Boolean(address))
    ).subscribe((address: string) => {
      this.dialog.open(DepositModalComponent, { data: { address } });
    });
  }

  openDepositPopup(address, wallet_id) {
    if (!address) {
      this._store.select('backoffice', 'user', '_id').subscribe((userId: string) => {
        this._store.dispatch(new GenerateWalletAddressRequest({ userId, wallet_id }));
      });
      return;
    }
    this.dialog.open(DepositModalComponent, {
      data: { address }
    });
  }

  openWithdrawalPopup(wallet_id: string) {
    this.dialog.open(WithdrawalModalComponent, {
      data: { wallet_id }
    });
  }
}

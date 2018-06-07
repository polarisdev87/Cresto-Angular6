import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material";
import { DepositModalComponent } from "./deposit-modal/deposit-modal.component";
import { WithdrawalModalComponent } from "./withdrawal-modal/withdrawal-modal.component";

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.sass']
})
export class WalletListComponent {
  @Input()
  wallets;

  constructor(
    public dialog: MatDialog
  ){}

  openDepositPopup(address) {
    this.dialog.open(DepositModalComponent, {
     data: {address}
    })
  }

  openWithdrawalPopup(test) {
    this.dialog.open(WithdrawalModalComponent, {
      data: {
        test: 'asdasdsdsdasd'
      }
    })
  }
}

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { DepositModalComponent } from './wallet-list/deposit-modal/deposit-modal.component';
import { WithdrawalModalComponent } from './wallet-list/withdrawal-modal/withdrawal-modal.component';
import { UiModule } from "../../shared/module/ui/ui.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: WalletComponent}
    ]),
    UiModule,
  ],
  declarations: [WalletComponent, WalletListComponent, TransactionListComponent, DepositModalComponent, WithdrawalModalComponent],
  entryComponents: [DepositModalComponent, WithdrawalModalComponent]
})
export class WalletModule { }

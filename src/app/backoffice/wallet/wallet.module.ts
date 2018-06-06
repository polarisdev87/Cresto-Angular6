import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: WalletComponent}
    ]),
  ],
  declarations: [WalletComponent, WalletListComponent, TransactionListComponent]
})
export class WalletModule { }

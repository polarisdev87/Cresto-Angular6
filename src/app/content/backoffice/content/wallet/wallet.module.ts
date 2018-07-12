import { WalletService } from './wallet.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepositviewComponent } from './depositview/depositview.component';
import { FormsModule } from '@angular/forms';
import { HelpComponent } from './help/help.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { OwnCoinThumbnailComponent } from './own-coin-thumbnail/own-coin-thumbnail.component';
import { OtherCoinThumbnailComponent } from './other-coin-thumbnail/other-coin-thumbnail.component';
import { TransactionsPipePipe } from './transactions-pipe.pipe';
import { WithdrawalFoundsComponent } from './withdrawal-founds/withdrawal-founds.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: WalletComponent, runGuardsAndResolvers: 'always' }
    ]),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('walletList', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [WalletComponent, TransactionListComponent, HelpComponent,
    DepositviewComponent, OwnCoinThumbnailComponent,
    OtherCoinThumbnailComponent, TransactionsPipePipe, WithdrawalFoundsComponent, PurchaseListComponent],
  providers: [WalletService]
})
export class WalletModule {
}

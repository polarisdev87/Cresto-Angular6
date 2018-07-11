import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BuyTokenFormComponent } from './buy-token-form/buy-token-form.component';
import { DepositPopupComponent } from './deposit-popup/deposit-popup.component';
import { BuyTokenSelectComponent } from './buy-token-form/buy-token-select/buy-token-select.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { BuyInstructionComponent } from './buy-instruction/buy-instruction.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: BuyComponent }
    ]),
    SharedModule,
    StoreModule.forFeature('buy', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [BuyComponent, BuyInstructionComponent,
    BuyTokenFormComponent, DepositPopupComponent, BuyTokenSelectComponent],
  entryComponents: [DepositPopupComponent]
})
export class BuyModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BuyTokenFormComponent } from './buy-token-form/buy-token-form.component';
import { UiModule } from '../../shared/module/ui/ui.module';
import { DepositPopupComponent } from './deposit-popup/deposit-popup.component';
import { BuyTokenSelectComponent } from './buy-token-form/buy-token-select/buy-token-select.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: BuyComponent}
    ]),
    UiModule
  ],
  declarations: [BuyComponent, BuyTokenFormComponent, DepositPopupComponent, BuyTokenSelectComponent],
  entryComponents: [DepositPopupComponent]
})
export class BuyModule { }

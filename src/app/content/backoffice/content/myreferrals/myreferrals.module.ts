import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyreferralsComponent } from './myreferrals.component';
import { RouterModule } from '@angular/router';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { ReferralLinkComponent } from './referral-link/referral-link.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { ReferralsService } from './referral.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('referrals', reducers),
    EffectsModule.forFeature(effects),
    RouterModule.forChild([
      {path: '', component: MyreferralsComponent}
    ]),
    NgxLoaderIndicatorModule.forRoot(),
  ],
  declarations: [MyreferralsComponent, ReferralLinkComponent],
  providers: [ReferralsService]
})
export class MyreferralsModule {
}

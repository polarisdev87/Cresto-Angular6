import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyreferralsComponent } from './myreferrals.component';
import { RouterModule } from '@angular/router';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { ReferralLinkComponent } from './referral-link/referral-link.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: MyreferralsComponent}
    ]),
    NgxLoaderIndicatorModule.forRoot(),
  ],
  declarations: [MyreferralsComponent, ReferralLinkComponent]
})
export class MyreferralsModule { }

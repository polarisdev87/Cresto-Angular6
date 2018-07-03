import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyreferralsComponent } from './myreferrals.component';
import { RouterModule } from '@angular/router';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { ReferralLinkComponent } from './referral-link/referral-link.component';
import { UiModule } from '../../shared/module/ui/ui.module';
import { CopypasteDirective } from '../../shared/directives/copypaste.directive';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {path: '', component: MyreferralsComponent}
    ]),
    NgxLoaderIndicatorModule.forRoot(),
  ],
  declarations: [MyreferralsComponent, ReferralLinkComponent, CopypasteDirective]
})
export class MyreferralsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralsComponent } from './referrals.component';
import { RouterModule } from "@angular/router";
import { ReferralDetailsComponent } from "../referraldetails/referraldetails.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ReferralsComponent},
      {path: ':id', component: ReferralDetailsComponent}
    ]),
  ],
  declarations: [ReferralsComponent, ReferralDetailsComponent]
})
export class ReferralsModule {
}

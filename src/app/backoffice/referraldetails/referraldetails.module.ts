import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralDetailsComponent } from './referraldetails.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ReferralDetailsComponent}
    ]),
  ],
  declarations: [ReferralDetailsComponent]
})
export class ReferralDetailsModule { }

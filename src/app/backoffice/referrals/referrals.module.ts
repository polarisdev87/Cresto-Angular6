import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralsComponent } from './referrals.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ReferralsComponent}
    ]),
  ],
  declarations: [ReferralsComponent]
})
export class ReferralsModule { }

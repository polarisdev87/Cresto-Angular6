import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyreferralsComponent } from './myreferrals.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MyreferralsComponent}
    ]),
  ],
  declarations: [MyreferralsComponent]
})
export class MyreferralsModule { }

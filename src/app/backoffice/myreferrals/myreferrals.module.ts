import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyreferralsComponent } from './myreferrals.component';
import { RouterModule } from '@angular/router';
import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MyreferralsComponent}
    ]),
    NgxLoaderIndicatorModule.forRoot(),
  ],
  declarations: [MyreferralsComponent]
})
export class MyreferralsModule { }

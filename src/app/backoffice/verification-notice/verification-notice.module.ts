import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { VerificationNoticeComponent } from './verification-notice.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: VerificationNoticeComponent}
    ]),
  ],
  declarations: [VerificationNoticeComponent]
})
export class VerificationNoticeModule {
}

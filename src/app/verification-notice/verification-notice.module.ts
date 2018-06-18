import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationNoticeComponent } from './verification-notice/verification-notice.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VerificationNoticeComponent
      }
    ]),
  ],
  declarations: [VerificationNoticeComponent],
})
export class VerificationNoticeModule { }

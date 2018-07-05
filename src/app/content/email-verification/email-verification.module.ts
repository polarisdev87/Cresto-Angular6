import { EmailVerificationService } from './email-verification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmailVerificationComponent
      }
    ]),
  ],
  declarations: [EmailVerificationComponent],
  providers: [EmailVerificationService]
})
export class EmailVerificationModule { }

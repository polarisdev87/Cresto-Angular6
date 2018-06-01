import { ResetPasswordGuardService } from './reset-password-guard.service';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { ResetPasswordEmailComponent } from './reset-password-email/reset-password-email.component';
import { ResetPasswordComponent } from './reset-password.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    children: [
      {
        path: '',
        component: ResetPasswordEmailComponent
      },
      {
        path: ':id',
        component: ResetPasswordFormComponent,
        canActivate: [ ResetPasswordGuardService ]
      }
    ]
  }
];

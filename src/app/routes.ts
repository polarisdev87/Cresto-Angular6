import {AuthGuardService} from './shared/services/auth-guard.service';

export const routes = [

  {path: '', loadChildren: './landing/landing.module#LandingModule'},
  {
    path: 'email/verification/check/:hash',
    loadChildren: './email-verification/email-verification.module#EmailVerificationModule',
  },
  {
    path: 'email/verification',
    loadChildren: './verification-notice/verification-notice.module#VerificationNoticeModule',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'reset-password',
    loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'backoffice',
    loadChildren: './backoffice/backoffice.module#BackofficeModule',
    canLoad: [AuthGuardService]
  },
  {path: ':referralHash', loadChildren: './landing/landing.module#LandingModule'},
  {
    path: '**',
    redirectTo: 'login'
  }
];

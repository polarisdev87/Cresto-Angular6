import { AuthGuardService } from './auth-guard.service';

export const routes = [

  {
    path: '',
    loadChildren: './content/landing/landing.module#LandingModule'
  },
  {
    path: 'pre-ico',
    loadChildren: './content/landing/landing.module#LandingModule'
  },
  {
    path: 'email/verification/check/:hash',
    loadChildren: './content/email-verification/email-verification.module#EmailVerificationModule',
  },
  {
    path: 'email/verification',
    loadChildren: './content/verification-notice/verification-notice.module#VerificationNoticeModule',
  },
  {
    path: 'login',
    loadChildren: './content/login/login.module#LoginModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'signup',
    loadChildren: './content/signup/signup.module#SignupModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'reset-password',
    loadChildren: './content/reset-password/reset-password.module#ResetPasswordModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'FAQ',
    loadChildren: './content/faq/faq.module#FAQModule',
  },
  {
    path: '',
    loadChildren: './content/backoffice/backoffice.module#BackofficeModule',
    canLoad: [AuthGuardService]
  },
  // {path: ':referralHash', loadChildren: './content/landing/landing.module#LandingModule'},
  {
    path: '**',
    redirectTo: 'login'
  }
];

import { UiModule } from './../shared/module/ui/ui.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackofficeComponent,
        children: [
          {path: '', redirectTo: 'buy', pathMatch: 'full'},
          {path: 'buy', loadChildren: './buy/buy.module#BuyModule'},
          {path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditProfileModule'},
          {path: 'disabletwofa', loadChildren: './disabletwofa/disabletwofa.module#DisableTwoFaModule'},
          {path: 'setuptwofa', loadChildren: './setuptwofa/setuptwofa.module#SetupTwoFaModule'},
          {path: 'comingsoon', loadChildren: './comingsoon/comingsoon.module#ComingsoonModule'},
          {path: 'myreferrals', loadChildren: './myreferrals/myreferrals.module#MyreferralsModule'},
          {path: 'referrals', loadChildren: './referrals/referrals.module#ReferralsModule'},
          {path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordModule'},
          {path: 'users', loadChildren: './user/user.module#UserModule'},
          {path: 'verifytwofactor', loadChildren: './verifytwofactor/verifytwofactor.module#VerifytwofactorModule'},
          {path: 'verificationpending', loadChildren: './verification-notice/verification-notice.module#VerificationNoticeModule'
          }
          // { path: 'dashboard', loadChildren: 'app/backoffice/dashboard/dashboard.module#DashboardModule' },
          // { path: 'whitelist', loadChildren: 'app/backoffice/whitelist/whitelist.module#WhitelistModule' },
        ]
      }
    ])
  ],
  declarations: [BackofficeComponent, ProfileComponent]
})
export class BackofficeModule {
}

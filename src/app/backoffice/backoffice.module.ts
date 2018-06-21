import { UiModule } from './../shared/module/ui/ui.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { ProfileComponent } from './profile/profile.component';
import { AccessGuardService } from '../shared/services/access-guard.service';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackofficeComponent,
        children: [
          {
            path: '',
            redirectTo: 'buy',
            pathMatch: 'full'
          },
          {
            path: 'buy',
            loadChildren: './buy/buy.module#BuyModule'
          }
          ,
          {
            path: 'editprofile',
            loadChildren: './editprofile/editprofile.module#EditProfileModule'
          },
          {
            path: 'disabletwofa',
            loadChildren: './disabletwofa/disabletwofa.module#DisableTwoFaModule'
          },
          {
            path: 'setuptwofa',
            loadChildren: './setuptwofa/setuptwofa.module#SetupTwoFaModule'
          },
          {
            path: 'comingsoon',
            loadChildren: './comingsoon/comingsoon.module#ComingsoonModule',
            canLoad: [AccessGuardService]
          },
          {
            path: 'myreferrals',
            loadChildren: './myreferrals/myreferrals.module#MyreferralsModule'
          },
          {
            path: 'referrals',
            loadChildren: './referrals/referrals.module#ReferralsModule',
            canLoad: [AccessGuardService]
          },
          {
            path: 'changepassword',
            loadChildren: './changepassword/changepassword.module#ChangepasswordModule',
            canLoad: [AccessGuardService]
          },
          {
            path: 'users',
            loadChildren: './user/user.module#UserModule',
            canLoad: [AccessGuardService]
          },
          {
            path: 'verifytwofactor',
            loadChildren: './verifytwofactor/verifytwofactor.module#VerifytwofactorModule'
          },
          {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
          },
          {
            path: 'wallet',
            loadChildren: './wallet/wallet.module#WalletModule'
          },
          {
            path: '**',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
          }
        ]
      }
    ])
  ],
  declarations: [BackofficeComponent, ProfileComponent]
})
export class BackofficeModule {
}

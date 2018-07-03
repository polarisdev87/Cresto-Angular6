import { UiModule } from '../shared/module/ui/ui.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { ProfileComponent } from './profile/profile.component';
import { AccessGuardService } from '../shared/services/access-guard.service';
import { BackofficeFooterComponent } from './backoffice-footer/backoffice-footer.component';
// import { ScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    // ScrollbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackofficeComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
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
            path: 'campaign',
            loadChildren: './comingsoon/comingsoon.module#ComingsoonModule',
            data: {
              title: 'CAMPAIGN',
              subtitle: `Our ampaign platform will allow you to earn up to 2.25% daily passice,
              income when you allocate the dollor value of your Crest token to run one of our profitable ad campaigns.`,
              backgroundImg: '../../../assets/images/come-paying.png'
            },
            canLoad: [AccessGuardService]
          },
          {
            path: 'exchenge',
            loadChildren: './comingsoon/comingsoon.module#ComingsoonModule',
            data: {
              title: 'EXCHANGE',
              subtitle: `Our internal Exchange will allow you to buy and sell Bitcoin, Ethereum, CSTT tokens.`,
              backgroundImg: '../../../assets/images/exchange.png'
            },
            canLoad: [AccessGuardService]
          },
          {
            path: 'staking',
            loadChildren: './comingsoon/comingsoon.module#ComingsoonModule',
            data: {
              title: 'STAKING',
              subtitle: `Our staking platform allows you to earn monthly dividens in the form of CSTT tokens (up to 10%)when you Stake your coins for 30 days or more.`,
              backgroundImg: '../../../assets/images/staking.png'
            },
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
  declarations: [BackofficeComponent, ProfileComponent, BackofficeFooterComponent]
})
export class BackofficeModule {
}

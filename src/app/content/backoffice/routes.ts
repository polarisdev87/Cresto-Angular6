import { BackofficeComponent } from './backoffice.component';
import { AccessGuardService } from './access-guard.service';
import { Route } from '@angular/router';

export const routes: Route[] = [
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
        loadChildren: './content/buy/buy.module#BuyModule',
        canLoad: [AccessGuardService]
      },
      {
        path: 'campaign',
        loadChildren: './content/comingsoon/comingsoon.module#ComingsoonModule',
        data: {
          title: 'CAMPAIGN',
          subtitle: `Our Campaign platform will allow you to earn up to 2.25% daily passive income,
              when you allocate the dollar value of your Crest token to run one of our profitable ad campaigns.`,
          backgroundImg: '../../../assets/images/come-paying.png'
        },
        canLoad: [AccessGuardService]
      },
      {
        path: 'exchenge',
        loadChildren: './content/comingsoon/comingsoon.module#ComingsoonModule',
        data: {
          title: 'EXCHANGE',
          subtitle: `Our internal Exchange will allow you to buy and sell Bitcoin, Ethereum and CSTT tokens.`,
          backgroundImg: '../../../assets/images/exchange.png'
        },
        canLoad: [AccessGuardService]
      },
      {
        path: 'staking',
        loadChildren: './content/comingsoon/comingsoon.module#ComingsoonModule',
        data: {
          title: 'STAKING',
          subtitle: `Our staking platform allows you to earn monthly dividends in the
          form of CSTT tokens (up to 10%), when you stake tokens for 30 days or more.`,
          backgroundImg: '../../../assets/images/staking.png'
        },
        canLoad: [AccessGuardService]
      },
      {
        path: 'myreferrals',
        loadChildren: './content/myreferrals/myreferrals.module#MyreferralsModule',
        canLoad: [AccessGuardService]
      },
      {
        path: 'dashboard',
        loadChildren: './content/dashboard/dashboard.module#DashboardModule',
        canLoad: [AccessGuardService]
      },
      {
        path: 'wallet',
        loadChildren: './content/wallet/wallet.module#WalletModule',
        canLoad: [AccessGuardService]
      },
      {
        path: 'settings',
        loadChildren: './content/settings/settings.module#SettingsModule',
        canLoad: [AccessGuardService]
      },
      {
        path: '**',
        loadChildren: './content/dashboard/dashboard.module#DashboardModule',
        canLoad: [AccessGuardService]
      }
    ]
  }
];

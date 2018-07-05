import {BackofficeComponent} from './backoffice.component';
import {AccessGuardService} from './shared/services/access-guard.service';

export const routes = [
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
          subtitle: `Our ampaign platform will allow you to earn up to 2.25% daily passice,
              income when you allocate the dollor value of your Crest token to run one of our profitable ad campaigns.`,
          backgroundImg: '../../../assets/images/come-paying.png'
        },
        canLoad: [AccessGuardService]
      },
      {
        path: 'exchenge',
        loadChildren: './content/comingsoon/comingsoon.module#ComingsoonModule',
        data: {
          title: 'EXCHANGE',
          subtitle: `Our internal Exchange will allow you to buy and sell Bitcoin, Ethereum, CSTT tokens.`,
          backgroundImg: '../../../assets/images/exchange.png'
        },
        canLoad: [AccessGuardService]
      },
      {
        path: 'staking',
        loadChildren: './content/comingsoon/comingsoon.module#ComingsoonModule',
        data: {
          title: 'STAKING',
          subtitle: `Our staking platform allows you to earn monthly dividens in the form of CSTT tokens (up to 10%)when you Stake your coins for 30 days or more.`,
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

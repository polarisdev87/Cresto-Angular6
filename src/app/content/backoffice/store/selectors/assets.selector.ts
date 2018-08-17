import { createFeatureSelector, createSelector } from '@ngrx/store';

const ASSETS = {
  btc: {
    icon: 'icon-bitcoin',
    tittle: 'Bitcoin wallet'
  },
  eth: {
    icon: 'icon-ether',
    tittle: 'Ethereum wallet'
  },
  xmr: {
    icon: 'icon-monero',
    tittle: 'Monero wallet'
  },
  cstt: {
    icon: 'icon-Token',
    tittle: 'CSTT wallet'
  },
};

export const getAssets = createSelector(
  createFeatureSelector<any>('backoffice'),
  (backoffice: any) => {
    return backoffice.assets.data.map((asset) => {
      return {...asset, icon: ASSETS[asset.code].icon};
    });
  }
);


export const getWalletsData = createSelector(
  createFeatureSelector<any>('backoffice'),
  (backoffice: any) => {
    return backoffice.wallets.data.slice(0, 4).map((wallet) => {
      return {...wallet, icon: ASSETS[wallet.asset.code].icon, tittle: ASSETS[wallet.asset.code].tittle };
    });
  }
);


export const getWalletsDatas = createSelector(
  createFeatureSelector<any>('backoffice'),
  (backoffice: any) => {
    return backoffice.wallets.data.slice(0, 3).map((wallet) => {
      return {...wallet, icon: ASSETS[wallet.asset.code].icon, tittle: ASSETS[wallet.asset.code].tittle };
    });
  }
);


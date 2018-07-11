import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getWalletsListTransactions = createSelector(
  createFeatureSelector<any>('walletList'),
  (walletList: any) => {
    return walletList.transactions.data.map((data) => {
      return {
        ...data,
        currency: data.asset_code === 'btc' ? 'Bitcoin' : 'Ethereum'
      };
    });
  }
);

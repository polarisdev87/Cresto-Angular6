import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getWalletsListPurchase = createSelector(
  createFeatureSelector<any>('walletList'),
  (walletList: any) => {
    return walletList.purchase.data.map((data) => {
      return {
        ...data,
        coin: 'CSTT',
        paidWith: data.paid_asset.code
      };
    });
  }
);

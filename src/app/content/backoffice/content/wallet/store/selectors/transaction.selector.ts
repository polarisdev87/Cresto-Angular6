import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getWalletsListTransactions = createSelector(
  createFeatureSelector<any>('walletList'),
  (walletList: any) => {
    return walletList.transactions.data.map((data) => {
      return {
        ...data,
        currency: data.asset_code === 'btc'
          ? 'Bitcoin'
          : 'Ethereum',
        linkHash: data.asset_code === 'btc'
          ? `<a class="hashLink" style="color: #c2c2c2;" target="_blank"
            href="https://www.blockchain.com/btc/tx/${data.hash}">
            ${data.hash || ''}</a>`
          : `<a class="hashLink" style="color: #c2c2c2;" target="_blank"
            href="https://etherscan.io/tx/0x${data.hash}">${data.hash || ''}</a>`
      };
    });
  }
);

import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';

export const getStateData = (stateNames: string): MemoizedSelector<object, any> => createSelector(
  createFeatureSelector<any>(stateNames),
  (state: any) => state.data
);

export const getGeneratedWalletAddress = createSelector(
  createFeatureSelector<WalletState>('wallets'),
  (state: WalletState) => state.generatedAddress
);


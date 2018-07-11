import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getReferralUsers = createSelector(
  createFeatureSelector<any>('referrals'),
  (referrals: any) => {
    return referrals.referralUsers.data.map((wallet, i) => {
      return {
        ...wallet,
        counter: i + 1
      };
    });
  }
);

import { ActionReducerMap } from '@ngrx/store';

import * as acl from './acl.reducer';
import * as assets from './assets.reducer';
import * as fromWallets from './wallets.reducer';
import * as fromUser from './user.reducer';

export interface BackofficeState {
  acl: Acl;
  assets: any;
  wallets: WalletState;
  user: User;
}

export const reducers: ActionReducerMap<BackofficeState> = {
  acl: acl.reducer,
  assets: assets.reducer,
  wallets: fromWallets.reducer,
  user: fromUser.reducer,
};

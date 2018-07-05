import {ActionReducerMap} from '@ngrx/store';

import * as acl from './acl.reducer';
import * as assets from './assets.reducer';

export interface BackofficeState {
  acl: Acl;
  assets: any;
}

export const reducers: ActionReducerMap<BackofficeState> = {
  acl: acl.reducer,
  assets: assets.reducer,
};

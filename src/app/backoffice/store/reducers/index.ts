import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as acl from './acl.reducer';

export interface BackofficeState {
  acl: Acl;
}

export const reducers: ActionReducerMap<BackofficeState> = {
  acl: acl.reducer
};


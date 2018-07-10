import { ActionReducerMap } from '@ngrx/store';

import * as fromRounds from './rounds.reducer';

export interface IDashboardState {
  rounds: any;
}

export const reducers: ActionReducerMap<IDashboardState> = {
  rounds: fromRounds.reducer,
};

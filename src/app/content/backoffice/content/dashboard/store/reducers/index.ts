import {ActionReducerMap} from '@ngrx/store';

import * as fromRounds from './rounds.reducer';

export interface DashboardState {
  rounds: any;
}

export const reducers: ActionReducerMap<DashboardState> = {
  rounds: fromRounds.reducer,
};

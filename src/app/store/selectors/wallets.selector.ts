import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';

export const getStateData = (stateName: string): MemoizedSelector<object, any> => createSelector(
  createFeatureSelector<any>(stateName),
  (state: any) => state.data
);


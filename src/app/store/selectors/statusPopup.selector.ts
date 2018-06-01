import { createFeatureSelector, createSelector, MemoizedSelector  } from '@ngrx/store';

export const getStatusPopupState: MemoizedSelector<object, StatusPopup> =
createFeatureSelector<StatusPopup>('statusPopup');

export const isStatusPopupOpen: MemoizedSelector<StoreStates, boolean> = createSelector(
  getStatusPopupState,
  (state: StatusPopup) => state.isOpen
);

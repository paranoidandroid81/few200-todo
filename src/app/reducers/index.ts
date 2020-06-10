import * as fromCounter from './counter.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};

// Selector functions

// 1) If in a feature, create a feature selector.

// 2) Create a mini selector function for each branch of the state
const selectCounterBranch = (state: AppState) => state.counter;

// 3) Any helpers you might need?

// 4) Write a selector for the components

export const selectGetCurrent = createSelector(
  selectCounterBranch,
  b => b.current
);

export const selectResetDisabled = createSelector(
  selectGetCurrent,
  c => c === fromCounter.initialState.current
);

export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
);

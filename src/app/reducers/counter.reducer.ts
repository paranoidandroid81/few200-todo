import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// export an interface for TS
export interface CounterState {
  current: number;
  by: number;
}

export const initialState: CounterState = {
  current: 0,
  by: 1
};

// reducer function
// (state, action) => state
// must be pure functions
// can't change args, no side effects (API calls, etc.)
const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (currState) => ({ ...currState, current: currState.current + currState.by })),
  on(actions.countDecremented, (currState) => ({ ...currState, current: currState.current - currState.by })),
  on(actions.countReset, () => initialState),
  on(actions.countBySet, (currState, action) => ({ ...currState, by: action.by }))

);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}

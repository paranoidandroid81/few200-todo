import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

// export an interface for TS
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

// reducer function
// (state, action) => state
const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (currState) => ({ current: currState.current + 1 })),
  on(actions.countDecremented, (currState) => ({ current: currState.current - 1 })),
  on(actions.countReset, () => initialState)

);

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return myReducer(state, action);
}

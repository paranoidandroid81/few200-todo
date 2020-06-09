import { createAction } from '@ngrx/store';

export const countIncremented = createAction(
  '[app counter] increment'
);

export const countDecremented = createAction(
  '[app counter] decrement'
);

export const countReset = createAction(
  '[app counter] reset'
);

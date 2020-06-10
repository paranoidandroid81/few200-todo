import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[app counter] increment'
);

export const countDecremented = createAction(
  '[app counter] decrement'
);

export const countReset = createAction(
  '[app counter] reset'
);

export const countBySet = createAction(
  '[app counter] count by set',
  props<{ by: number }>()
);

export const currentSet = createAction(
  '[app counter] current set',
  props<{ current: number }>()
);

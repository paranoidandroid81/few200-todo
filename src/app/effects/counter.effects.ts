import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';

@Injectable()
export class CounterEffects {
  // when application is started.
  // check the localstorage for 'by'
  // if it is there,  dispatch at setCountBy
  // if it isn't, don't do anything.
  loadCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')),
      filter(by => by !== null),
      map(by => +by),
      map(by => counterActions.countBySet({ by }))

    ), { dispatch: true });

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false });

  constructor(private actions$: Actions) {
  }
}

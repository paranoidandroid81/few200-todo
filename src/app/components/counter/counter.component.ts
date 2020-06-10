import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectGetCurrent, selectResetDisabled, selectCountingBy } from 'src/app/reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  resetDisabled$: Observable<boolean>;
  countingBy$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.pipe(
      select(selectGetCurrent)
    );
    this.resetDisabled$ = this.store.pipe(
      select(selectResetDisabled)
    );
    this.countingBy$ = this.store.pipe(
      select(selectCountingBy)
    );
  }

  increment() {
    // this.current += 1;
    this.store.dispatch(actions.countIncremented());
  }

  decrement() {
    // this.current -= 1;
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    this.store.dispatch(actions.countReset());
  }

  setCountBy(by: number) {
    this.store.dispatch(actions.countBySet({ by }));
  }

}

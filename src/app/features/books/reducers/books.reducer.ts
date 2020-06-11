import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/books.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
  onLoan: boolean;
}

export interface BookState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.addBook, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.updateBookOnLoan, (s, a) => {
    console.log(a.payload);
    return adapter.setOne(a.payload, s);
  }));


export function reducer(state: BookState = initialState, action: Action) {
  return reducerFunction(state, action);
}


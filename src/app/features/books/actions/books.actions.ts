import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducers/books.reducer';

let id = 0;

export const addBook = createAction(
  '[bookshelf books] add book',
  ({ title, author, format, onLoan }: { title: string, author: string, format: string, onLoan: boolean }) => ({
    payload: {
      id: `T${id++}`,
      title,
      author,
      format,
      onLoan
    } as BookEntity
  })
);

export const updateBookOnLoan = createAction(
  '[bookshelf books] update book loan',
  ({ id, title, author, format, onLoan }: { id: string, title: string, author: string, format: string, onLoan: boolean }) => ({
    payload: {
      id,
      title,
      author,
      format,
      onLoan
    } as BookEntity
  }));

export const addBookSucceeded = createAction(
  '[bookshelf books] add book succeeded',
  props<{ oldId: string, payload: BookEntity }>()
)

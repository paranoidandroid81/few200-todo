import * as fromBooks from './books.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { BookListItem } from '../models';

export const featureName = 'bookshelf';

export interface BookshelfState {
  books: fromBooks.BookState;
}

export const reducers: ActionReducerMap<BookshelfState> = {
  books: fromBooks.reducer
};

const selectBookshelfFeature = createFeatureSelector<BookshelfState>(featureName);

const selectBooksBranch = createSelector(
  selectBookshelfFeature,
  f => f.books
);

const { selectAll: selectBookEntityArray } = fromBooks.adapter.getSelectors(selectBooksBranch);

export const selectBookListItems = createSelector(
  selectBookEntityArray,
  (books) => books.map(book => {
    return {
      ...book
    } as BookListItem;
  })
);

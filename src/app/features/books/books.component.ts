import { Component, OnInit } from '@angular/core';
import { BookListItem } from './models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BookshelfState, selectBookListItems } from './reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;

  constructor(private store: Store<BookshelfState>) { }

  ngOnInit(): void {
    this.books$ = this.store.pipe(
      select(selectBookListItems)
    );
  }

}

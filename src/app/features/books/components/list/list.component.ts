import { Component, OnInit, Input } from '@angular/core';
import { BookListItem } from '../../models';
import { Store } from '@ngrx/store';
import { BookshelfState } from '../../reducers';
import * as actions from '../../actions/books.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: BookListItem[] = [];

  constructor(private store: Store<BookshelfState>) { }

  ngOnInit(): void {
  }

  toggleOnLoan(thisBook: BookListItem) {
    this.store.dispatch(actions.updateBookOnLoan({ ...thisBook, onLoan: !thisBook.onLoan }));
  }

}

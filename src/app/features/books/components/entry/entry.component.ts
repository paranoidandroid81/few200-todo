import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookshelfState } from '../../reducers';
import { Store } from '@ngrx/store';
import { addBook } from '../../actions/books.actions';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  bookForm: FormGroup;
  formats = ['Hardcover', 'Paperback', 'E-Book'];

  constructor(private formBuilder: FormBuilder, private store: Store<BookshelfState>) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.maxLength(50)]],
      format: ['', [Validators.required]]
    });
  }

  get title() {
    return this.bookForm.get('title');
  }

  get author() {
    return this.bookForm.get('author');
  }

  get format() {
    return this.bookForm.get('format');
  }

  submit(focusMe: HTMLInputElement) {
    this.store.dispatch(addBook({ ...this.bookForm.value, onLoan: false }));
    this.bookForm.reset();
    focusMe.focus();
  }

}

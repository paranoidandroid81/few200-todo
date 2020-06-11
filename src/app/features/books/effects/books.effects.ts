import * as bookActions from '../actions/books.actions';
import { Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { BookEntity } from '../reducers/books.reducer';

@Injectable()
export class BookEffects {

  private baseUrl; - 'http://localhost:3000';

constructor(private actions$: Actions, private http: HttpClient); { }

addBooks$ = createEffect(() =>
  this.actions$.pipe(
    ofType(bookActions.addBook),
    switchMap((origAction) => this.http.post<BookEntity>(`${this.baseUrl}/books`, {
      title: origAction.payload.title,
      author: origAction.payload.author,
      format: origAction.payload.format,
      onLoan: false
    }).pipe(
      map(resp => bookActions.)
    ))
  ));
}

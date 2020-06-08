import { TodoListItem } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

export class TodoDataService {


  private items: TodoListItem[] = [
    { description: 'Build Trampoline', completed: false },
    { description: 'Show Violet how to use IMovie', completed: false }
  ];

  private subject = new BehaviorSubject<TodoListItem[]>(this.items);
  getItems(): Observable<TodoListItem[]> {
    return this.subject.asObservable();
  }

  addItem(description: string) {
    this.items = [{ description, completed: false }, ...this.items];
    this.subject.next(this.items);
  }
}

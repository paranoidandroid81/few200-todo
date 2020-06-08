import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() items: TodoListItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

}

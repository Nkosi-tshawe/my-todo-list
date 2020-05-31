import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import {  TodoService } from '../../service/todo-service.service';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-index-route',
  templateUrl: './todo-index-route.component.html',
  styleUrls: ['./todo-index-route.component.scss']
})
export class TodoIndexRouteComponent implements OnInit {

  constructor(private todoService: TodoService ) { };

  public fetchData$: Observable<boolean>; 
  todos$: Observable<Todo[]>;

  ngOnInit(): void {
    this.fetchData$ = this.todoService.getTodos(5);
    this.todos$ = this.todoService.todos$;
  }

  onChange(id:any) {
    this.todoService.updateStatus(id);
  }

}

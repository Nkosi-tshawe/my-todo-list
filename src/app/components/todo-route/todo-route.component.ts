import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

import { TodoComponent } from '../todo/todo.component';
import {  TodoService } from '../../service/todo-service.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-route',
  templateUrl: './todo-route.component.html',
  styleUrls: ['./todo-route.component.scss']
})

export class TodoRouteComponent implements OnInit {
 
  constructor( private _location: Location,
     private todoService: TodoService, 
     private router: Router, 
     private activatedRoute: ActivatedRoute) 
     { }

  public fetchData$: Observable<Todo>; 
  todos$: Observable<Todo>;
  todo: Todo;
  todoId: any;

  ngOnInit(): void {
   
    // get activated route params
   this.todoId = this.activatedRoute.snapshot.paramMap.get('id');

    //  // Fetch todo data
    this.fetchData$ = this.todoService.getTodo(this.todoId);

    // Subscribe and assign data 
    this.fetchData$.subscribe((data:Todo )=>{1
      this.todo = data;
    });

  }

  /**
   * Go Back to /todos page
   */

  goBack() {
    this.router.navigateByUrl('/todos');
  }

}

import { Component,OnInit} from '@angular/core';
import { Todo } from './models/todo';
import { Observable } from 'rxjs';
import { TodoService } from './service/todo-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Todo List';
  todos: Todo[];
  constructor (private todoService: TodoService ) {
  }

  private fetchData$:Observable<boolean>; 

  ngOnInit(): void {
  }
}
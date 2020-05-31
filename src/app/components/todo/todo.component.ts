import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Todo } from '../../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

@Input() todo: Todo;status:boolean;
@Output() updateStatus: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.status = this.todo.completed;
  }

  onChange() {
    this.status = this.todo.completed = !this.todo.completed;
   
   }

}

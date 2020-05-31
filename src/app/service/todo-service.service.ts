import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject,of, throwError } from 'rxjs';
import { map,catchError,tap} from 'rxjs/operators';
import { Todo } from '../models/todo';

import { environment } from '../../environments/environment';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url: string;
  dueDate:any;
  public todos: Todo[];
  public todo: Todo; // for storing a single todo after another api call

  private subject = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.subject.asObservable(); 
  
  
  constructor(private _http: HttpClient, private messageService: MessageService ) { 
    this.log('init...');
    this.url = environment.apiUrl;
    this.log(`Env Api url -> ${this.url}`);
  }

  /**
   * getTodos, gets set number of todos 
   * @param limit 
   */
  public getTodos(limit:any): Observable<boolean> {
   this.log(`getTodos limit=${limit}`);
   let url = `${this.url}/todos?_limit=${limit}`;
   this.log(`API url: ${url}`);
   let response = this._http.get<Todo[]>(url).pipe(
        map((data: Todo[]) => {
            this.log('maping data response...');
            this.todos = data.map(todo => this.transform(todo));
            this.subject.next(this.todos);
           return true;
          }
        ),
        catchError (err => {
          this.log(`HTTP error ${err.message}`);
          return of(false);
        })
    );
    return response;
       
  }


  /**
   * getTodo, get a todo item with matching id
   * @param id 
   */

  getTodo(id:any):Observable<Todo> { 
    this.log(`Fetching todo id->${id}`);
    return this._http.get<Todo>(`${this.url}/todos/${id}`)
    .pipe(
        map(
          (data:Todo) => {
            return this.transform(data);
          }
        ),
        catchError (err => {
          this.log(`HTTP error ${err.message}`);
          return of(false);
        })
    )
  }

/**
 * Transform a Todo object by adding a random timestamp to dueDate property
 * @param response 
 */

  private transform(response:any) {
        return Object.assign(response,{dueDate: this.randomTimeStamp()})
  };


  /**
   * Generate a random time stamp between start and end date.
   */  

  randomTimeStamp() {
    let start = new Date(environment.startDate);
    let end = new Date(environment.endDate);
    var diff =  end.getTime() - start.getTime();
    var new_diff = diff * Math.random();
    this.dueDate = new Date(start.getTime() + new_diff);
   
    return this.dueDate;
  }

   getUrl() {
    return this.url;
  };

  /**
   * upDateStatus, update the todo complete status
   * @param id 
   */

  updateStatus(id:any) {
    const indx = this.todos.findIndex((todo)=> {
      todo.id === id;
    });
    this.todos[indx].completed = !this.todos[indx].completed;
  }
  /**
   * removeTodo, remove a todo item
   * @param id 
   */

  removeTodo(id:any) {
    this.todos = this.todos.filter(todo => {
      return  todo.id !== id
    });
  }

  /**
   * addTodo a new todo item
   * @param todo 
   */
  addTodo(todo: Todo) {
    this.todos = [...this.todos,todo];
    this.subject.next(this.todos);
  }

  /**
   * log, message logger
   * @param message 
   */

  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }
}
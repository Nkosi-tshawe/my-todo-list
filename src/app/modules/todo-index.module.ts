import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoIndexRouteComponent, TodoComponent } from '../components'
import { TodoIndexRoutingModule } from './todo-index-routing.module';
import { TodoService } from '../service/todo-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
     TodoIndexRouteComponent, 
     TodoComponent
  ],
  providers:[TodoService],
  imports: [
    CommonModule,
    TodoIndexRoutingModule,
    FormsModule
  ]
})
export class TodoIndexModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRouteComponent}  from '../components';
import { TodoRoutingModule } from './todo-routing.module';


@NgModule({
  declarations: [
    TodoRouteComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoModule { }

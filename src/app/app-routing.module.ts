import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'todos',
    pathMatch: 'full'
  },

  {
    path:'todos',
    loadChildren: () => import('./modules/todo-index.module').then(mod => mod.TodoIndexModule)
  },
  {
    path:'todos/:id',
    loadChildren: () => import('./modules/todo.module').then(mod => mod.TodoModule)
  },
  {
    path:'**',
    redirectTo:'todos',
    pathMatch: 'full'

  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
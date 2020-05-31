import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoRouteComponent} from '../components';

const routes: Routes = [
    
    {
        path:'',
        component: TodoRouteComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoRoutingModule {

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoIndexRouteComponent} from '../components';

const routes: Routes = [
    {
        path:'',
        component: TodoIndexRouteComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoIndexRoutingModule {

}
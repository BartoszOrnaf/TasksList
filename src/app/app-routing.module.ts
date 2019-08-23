import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoneListComponent } from './done-list/done-list.component';
import { InputTaskComponent } from './input-task/input-task.component';
import { PrintTasksComponent } from './print-tasks/print-tasks.component';

const routes: Routes = [
    { path: 'donelist', component: DoneListComponent },
    { path: 'inputtask', component: InputTaskComponent },
    { path: 'printtasks', component: PrintTasksComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const RoutingComponents = [ DoneListComponent, InputTaskComponent, PrintTasksComponent ]
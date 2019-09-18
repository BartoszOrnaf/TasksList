import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module'

import { CheckedDirective } from './directives/checked.directive';
import { UncheckedDirective } from './directives/unchecked.directive';
import { ExclamationPipe } from './pipes/exclamation.pipe';
import { UpperCasePipe } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { ImportantListComponent } from './components/important-list/important-list.component';
import { DoneListComponent } from './components/done-list/done-list.component';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { PrintTasksComponent } from './components/print-tasks/print-tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksService } from './services/tasks.service';


@NgModule({
  declarations: [
    AppComponent,
    CheckedDirective,
    UncheckedDirective,
    ExclamationPipe,
    SortPipe,
    RoutingComponents,
    ImportantListComponent,
    
    DoneListComponent,
    InputTaskComponent,
    PrintTasksComponent,
    NavbarComponent,
  

  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,
  ],
  providers: [UpperCasePipe, TasksService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
  
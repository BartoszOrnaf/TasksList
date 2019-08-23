import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { InputTaskComponent } from './input-task/input-task.component';
import { PrintTasksComponent } from './print-tasks/print-tasks.component';
import { DoneListComponent } from './done-list/done-list.component';
import { PayToContinueComponent } from './pay-to-continue/pay-to-continue.component';
import { PayToContinueService } from './pay-to-continue.service';
import { CheckedDirective } from './checked.directive';
import { UncheckedDirective } from './unchecked.directive';
import { ExclamationPipe } from './exclamation.pipe';
import { UpperCasePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    InputTaskComponent,
    PrintTasksComponent,
    DoneListComponent,
    PayToContinueComponent,
    CheckedDirective,
    UncheckedDirective,
    ExclamationPipe,
      
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [PayToContinueService, UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

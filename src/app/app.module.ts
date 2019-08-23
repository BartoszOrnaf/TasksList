import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module'


import { PayToContinueComponent } from './pay-to-continue/pay-to-continue.component';
import { PayToContinueService } from './pay-to-continue.service';
import { CheckedDirective } from './checked.directive';
import { UncheckedDirective } from './unchecked.directive';
import { ExclamationPipe } from './exclamation.pipe';
import { UpperCasePipe } from '@angular/common';
import { SortPipe } from './sort.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PayToContinueComponent,
    CheckedDirective,
    UncheckedDirective,
    ExclamationPipe,
    SortPipe,
    RoutingComponents
      
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [PayToContinueService, UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

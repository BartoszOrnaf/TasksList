import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './components/badges/badges.component';
import { BadgesRoutingModule } from './badges-routing.module'


@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    CommonModule, BadgesRoutingModule 
  ], 
  providers: [],
  exports: [BadgesComponent]
})
export class BadgesModule { }

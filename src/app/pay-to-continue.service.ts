import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PayToContinueService implements OnInit {

  actionsLeft: number;
  actionsLeftObs: BehaviorSubject<number> = new BehaviorSubject(this.actionsLeft);
 

  constructor() {
    this.actionsLeft = 20;
    this.actionsLeftObs.next(this.actionsLeft);
  }

  ngOnInit(){
          
  }
  oneActionLess(){
    this.actionsLeft = this.actionsLeft -1;
    this.actionsLeftObs.next(this.actionsLeft);
  }

  getActionsLeftObs(){
   return this.actionsLeftObs.asObservable();
  }

  resetActions(){
    this.actionsLeft = 20;
    this.actionsLeftObs.next(this.actionsLeft);
  }
}

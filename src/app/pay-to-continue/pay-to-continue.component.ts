import { Component, OnInit } from '@angular/core';
import { PayToContinueService } from '../pay-to-continue.service';

@Component({
  selector: 'app-pay-to-continue',
  templateUrl: './pay-to-continue.component.html',
  styleUrls: ['./pay-to-continue.component.css']
})
export class PayToContinueComponent implements OnInit {

  actionsLeft: number;

  constructor(private payToContinue: PayToContinueService) { }

  ngOnInit() {
    this.payToContinue.getActionsLeftObs().subscribe(data => {
      this.actionsLeft = data;
    })

  }

  OneLess(){
    this.payToContinue.oneActionLess();
  }   

  resetActions(){
    this.payToContinue.resetActions();
  }
}

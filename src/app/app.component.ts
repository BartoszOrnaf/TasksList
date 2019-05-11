import { Component, OnInit } from '@angular/core';
import { PayToContinueService } from './pay-to-continue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  actionsLeft: number;

  constructor(private payToContinueService: PayToContinueService) { }

  ngOnInit() {
    this.payToContinueService.getActionsLeftObs().subscribe(data => { this.actionsLeft = data; }
    )
  }

}

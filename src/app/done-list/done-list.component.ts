import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {
  @Input()
  doneList: Array<string>;
  
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getDoneListObs().subscribe(data => {
      this.doneList = data;
    })
  }

}

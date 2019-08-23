import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {
  @Input()
  doneList: Observable<Array<string>>;
  
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.doneList = this.tasksService.getDoneListObs();
    // this.tasksService.getDoneListObs().subscribe(data => {
    //   this.doneList = data;
    // })
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../tasks.service';
import { PayToContinueService } from '../pay-to-continue.service';
import { Observable} from 'rxjs';



@Component({
  selector: 'app-print-tasks',
  templateUrl: './print-tasks.component.html',
  styleUrls: ['./print-tasks.component.css']
})
export class PrintTasksComponent implements OnInit {

  
  taskList$: Observable<Array<string>>;
    
  constructor(private tasksService: TasksService, private payToContinueService: PayToContinueService) { }

  ngOnInit() {
      this.taskList$ = this.tasksService.getTaskListObs();
  }

  remove(task: string) {
   this.tasksService.remove(task);
   this.payToContinueService.oneActionLess();
  }

  done(task: string) {
    this.tasksService.done(task);
    this.payToContinueService.oneActionLess();
  }
}

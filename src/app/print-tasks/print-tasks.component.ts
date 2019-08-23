import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../tasks.service';
import { PayToContinueService } from '../pay-to-continue.service';
<<<<<<< HEAD
import { Observable} from 'rxjs';


=======
import { Observable } from 'rxjs';
>>>>>>> 1b05e2d6c7fbd6b3b653c560794347b385763ef5

@Component({
  selector: 'app-print-tasks',
  templateUrl: './print-tasks.component.html',
  styleUrls: ['./print-tasks.component.css']
})
export class PrintTasksComponent implements OnInit {


  taskList: Array<string>;
  // taskList$: Observable<Array<string>>;

  constructor(private tasksService: TasksService, private payToContinueService: PayToContinueService) {

  }

  ngOnInit() {
    this.tasksService.getTaskListObs().subscribe(data => this.taskList = data.slice());
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

import { Component, OnInit} from '@angular/core';
import { TasksService } from '../tasks.service';
import { PayToContinueService } from '../pay-to-continue.service';


@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit {
    
  recentTask: string;

  constructor(private tasksService: TasksService, private payToContinueService: PayToContinueService) { }

  ngOnInit() {
  }

  emitTask(task: string){
    this.tasksService.addTask(task);
    this.recentTask = '';
    this.payToContinueService.oneActionLess();

  }

}

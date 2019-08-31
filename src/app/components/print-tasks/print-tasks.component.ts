import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task'

@Component({
  selector: 'app-print-tasks',
  templateUrl: './print-tasks.component.html',
  styleUrls: ['./print-tasks.component.css']
})
export class PrintTasksComponent implements OnInit {

  taskList: Array<Task>;
 
  constructor(private tasksService: TasksService) {

  }

  ngOnInit() {
    this.tasksService.getTaskListObs().subscribe(data => 
      this.taskList = data.filter(e => e.completed !== true && e.important !== true));
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }
}

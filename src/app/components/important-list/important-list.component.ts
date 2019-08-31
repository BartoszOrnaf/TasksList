import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task'

@Component({
  selector: 'app-important-list',
  templateUrl: './important-list.component.html',
  styleUrls: ['./important-list.component.scss']
})
export class ImportantListComponent implements OnInit {

  taskList: Array<Task>;
 
  constructor(private tasksService: TasksService) {

  }

  ngOnInit() {
    this.tasksService.getTaskListObs().subscribe(data => 
      this.taskList = data.filter(e => e.important !== false && e.completed !== true));
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }
}

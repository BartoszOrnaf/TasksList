import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  taskList: Array<Task>;

  constructor(
    private tasksService: TasksService,
  ) { }

  ngOnInit() { 
     this.tasksService.getTaskListObs().subscribe(data => 
    this.taskList = data.filter(e => e.completed === true));

  }

}

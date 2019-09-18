import { Component, OnInit} from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  taskList: Array<Task>;
 
  constructor(private tasksService: TasksService) {

  }

  ngOnInit() {
    this.tasksService.getTaskListObs().subscribe(data => 
      this.taskList = data.filter(e => e.completed !== false && e.archived !== true));     
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }
  
  archive(task: Task){
    this.tasksService.archive(task);
  }
}


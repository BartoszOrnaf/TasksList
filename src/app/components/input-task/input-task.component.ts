import { Component, OnInit} from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task'


@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit {
  
  recentTask = <Task> {name: '', important: false, completed: false}
  inputTaskName = <string>'';
  isImportant:  false;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

  toggleImportant(){
    this.recentTask.important = !this.recentTask.important; 
  }

  emitTask(){
    if(this.inputTaskName !== '')
    {
    this.recentTask.name = this.inputTaskName;
    this.tasksService.addTask(this.recentTask);
    this.inputTaskName = '';
  }else{
    alert("Please input a task before submitting!")
  }
  }

}

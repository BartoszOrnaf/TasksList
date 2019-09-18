import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  taskList: Array<Task> = [];
  taskListObs: BehaviorSubject<Array<Task>> = new BehaviorSubject([]);

  constructor() {
    this.taskList = [{
      name: 'Eat, sleep, code, repeat',
      important: true,
      completed: true,
      archived: false,
      createdAt: new Date(2019,7,27)
    },
    {
      name: 'Learn js',
      important: true,
      completed: true,
      archived: true,
      createdAt: new Date(2019,7,20)
    },
    {
      name: 'Learn bootstrap',
      important: true,
      completed: true,
      archived: true,
      createdAt: new Date(2018,8,5)
    },
    {
      name: 'Learn Jquery',
      important: true,
      completed: true,
      archived: true,
      createdAt: new Date(2018,5,17)
    }];
    this.taskListObs.next(this.taskList);
  }

  addTask(newTask: Task) {
    const addedTask = <Task>{ name: newTask.name, important: newTask.important, completed: newTask.completed, archived: newTask.archived, createdAt: new Date }
    this.taskList.push(addedTask);
    this.taskListObs.next(this.taskList);
    
  }
  remove(task: Task) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList);
  }

  done(task: Task) {
    task.completed = true;
    this.taskListObs.next(this.taskList);
  }

  archive(task: Task) {
    task.archived = true;
    this.taskListObs.next(this.taskList);
  }

  getTaskListObs() {
    return this.taskListObs.asObservable()
  }
}


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
      archived: false
    }];
    this.taskListObs.next(this.taskList);
   
  }

  addTask(newTask: Task) {
    const addedTask = <Task>{name: newTask.name, important: newTask.important, completed: newTask.completed}
    this.taskList.push(addedTask);
    this.taskListObs.next(this.taskList);
    console.log(this.taskList)
  }
  remove(task: Task) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList);
  }

  done(task: Task) {
 task.completed = true;
 console.log(task);
 console.log(this.taskList);
 this.taskListObs.next(this.taskList);
  }

  getTaskListObs() {
    return this.taskListObs.asObservable()
  }
}


import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  taskList: Array<string> = [];
  doneList: Array<string> = [];


  taskListObs: BehaviorSubject<Array<string>> = new BehaviorSubject(this.taskList);
  doneListObs: BehaviorSubject<Array<string>> = new BehaviorSubject(this.doneList);


  constructor() {
    this.taskList = ['sprzątanie', 'gotowanie', 'pranie'];
    this.taskListObs.next(this.taskList);
  }


  addTask(newTask: string) {
    this.taskList.push(newTask);
    this.taskListObs.next(this.taskList);
  }
  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList);
  }

  done(task: string) {
    this.doneList.push(task)
    this.remove(task);
    this.doneListObs.next(this.doneList)
  }

  getTaskListObs() {
    return this.taskListObs.asObservable()
  }

  getDoneListObs() {
    return this.doneListObs.asObservable()
  }
}


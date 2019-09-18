import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archiveWeek: Array<Task>
  archiveMonth: Array<Task>
  archiveYear: Array<Task>

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTaskListObs().subscribe(data =>
      { 
        this.archiveWeek = data.filter(e => ( Date.now() - Date.parse(e.createdAt.toString()) ) <= (86400000 * 6) && e.archived===true)
      }
    )
    this.tasksService.getTaskListObs().subscribe(data =>
      { 
        this.archiveMonth = data.filter(e => ( Date.now() - Date.parse(e.createdAt.toString()) ) > (86400000 * 6) && ( Date.now() - Date.parse(e.createdAt.toString()) ) < (86400000 * 30) && e.archived===true)
      }
    )
    this.tasksService.getTaskListObs().subscribe(data =>
      { 
        this.archiveYear = data.filter(e => ( Date.now() - Date.parse(e.createdAt.toString()) ) >= (86400000 * 30)  && e.archived===true)
      }
    )
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }
 
  
}

 
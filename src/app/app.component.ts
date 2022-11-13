import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = this.backend.tasks();
  users = this.backend.users();
  onNewTask(description: string): void {
    this.backend.newTask(description);
    this.tasks = this.backend.tasks();
    this.selectedTask = null;
    this.description = "";
  };
  assign = this.backend.assign;
  onComplete(id: number): void {
    this.backend.complete(id, true);
    this.tasks = this.backend.tasks();
    this.selectedTask = null;
  };
  update = this.backend.update;
  description = "";
  selectedTask?: any;
  onSelect(task: any): void {
    this.selectedTask = task;
  };

  id = null;
  onFindTaskById(id: number): void {
    this.backend.task(id)
    this.tasks = this.backend.tasks();
  }

  constructor(private backend: BackendService) { }
}

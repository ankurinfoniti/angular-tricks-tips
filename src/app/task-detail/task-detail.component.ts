import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}

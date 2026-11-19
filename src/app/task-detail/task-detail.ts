import { Component, input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-detail',
  styleUrl: './task-detail.css',
  templateUrl: './task-detail.html',
})
export class TaskDetail {
  readonly task = input<Task | null>(null);
}

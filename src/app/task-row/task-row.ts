import { Component, input, output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-row',
  styleUrl: './task-row.css',
  templateUrl: './task-row.html',
})
export class TaskRow {
  readonly task = input.required<Task>();
  readonly selected = input(false);
  readonly pick = output<number>();

  protected choose(): void {
    this.pick.emit(this.task().id);
  }
}

import { Component, computed, linkedSignal, signal } from '@angular/core';
import { SearchBox } from './search-box/search-box';
import { Task, TaskStatus } from './task';
import { TaskDetail } from './task-detail/task-detail';
import { TaskRow } from './task-row/task-row';

@Component({
  imports: [SearchBox, TaskRow, TaskDetail],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly count = signal(0);
  protected readonly doubled = computed(() => this.count() * 2);

  private readonly tasksState = signal<Task[]>([
    { id: 1, title: 'Сигналы', status: 'done' },
    { id: 2, title: 'Шаблоны', status: 'open' },
    { id: 3, title: 'Роутер', status: 'blocked' },
  ]);

  protected readonly tasks = this.tasksState.asReadonly();

  protected readonly query = signal('');

  protected readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    if (!query) {
      return this.tasks();
    }
    return this.tasks().filter((task) => task.title.toLowerCase().includes(query));
  });

  protected readonly selectedId = linkedSignal<Task[], number | null>({
    source: this.filtered,
    computation: (items, previous) => {
      const current = previous?.value ?? null;
      if (current === null) {
        return null;
      }
      return items.some((item) => item.id === current) ? current : null;
    },
  });

  protected readonly selectedTask = computed(() => {
    const id = this.selectedId();
    if (id === null) {
      return null;
    }
    return this.tasks().find((task) => task.id === id) ?? null;
  });

  protected increment(): void {
    this.count.update((value) => value + 1);
  }

  protected reset(): void {
    this.count.set(0);
  }

  protected select(id: number): void {
    this.selectedId.set(id);
  }

  protected toggleStatus(): void {
    const current = this.selectedTask();
    if (!current) {
      return;
    }
    const status = nextStatus(current.status);
    this.tasksState.update((tasks) =>
      tasks.map((task) => (task.id === current.id ? { ...task, status } : task)),
    );
  }

  protected mutateSilently(): void {
    setTimeout(() => {
      const first = this.tasks()[0];
      if (first) {
        first.title = 'Молчаливая мутация';
      }
    });
  }

  protected renameFirst(): void {
    this.tasksState.update((tasks) =>
      tasks.map((task, index) => (index === 0 ? { ...task, title: 'Переименовано' } : task)),
    );
  }
}

function nextStatus(status: TaskStatus): TaskStatus {
  if (status === 'open') {
    return 'done';
  }
  if (status === 'done') {
    return 'blocked';
  }
  return 'open';
}

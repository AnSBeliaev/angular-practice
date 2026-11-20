import { Injectable, computed, signal } from '@angular/core';

export interface StoreTask {
  id: number;
  title: string;
}

/**
 * Задача 2.1. Хранилище задач
 *
 * Ситуация: список задач сейчас жил бы в компоненте, и второй экран не может
 * его прочитать. Нужен один сервис на всё приложение.
 *
 * Что сделать:
 * - add(title) добавляет задачу со статусом открытой и id 1, 2, 3...
 * - rename(id, title) меняет название
 * - remove(id) удаляет
 * - tasks — сигнал только для чтения (asReadonly)
 * - openCount — computed, число задач
 * Записи через новый массив (set/update), не через мутацию объекта внутри сигнала.
 *
 * На собесе: «Чем сервис отличается от хука? Что значит providedIn: 'root'?
 * Зачем asReadonly? Где вызывают inject(), а где нельзя?»
 */
@Injectable({ providedIn: 'root' })
export class TaskStore {
  private readonly tasksState = signal<StoreTask[]>([]);

  readonly tasks = this.tasksState.asReadonly();
  readonly openCount = computed(() => 0);

  add(_title: string): void {}

  rename(_id: number, _title: string): void {}

  remove(_id: number): void {}
}

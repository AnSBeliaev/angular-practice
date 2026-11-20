import { TestBed } from '@angular/core/testing';
import { TaskStore } from './t05-task-store';

describe('t05 task store', () => {
  it('test_05_adds_renames_and_removes', () => {
    const store = TestBed.inject(TaskStore);

    store.add('Счёт');
    store.add('Роутер');
    expect(store.tasks().map((task) => task.id)).toEqual([1, 2]);
    expect(store.tasks().map((task) => task.title)).toEqual(['Счёт', 'Роутер']);
    expect(store.openCount()).toBe(2);

    store.rename(1, 'Сигналы');
    expect(store.tasks()[0].title).toBe('Сигналы');

    store.remove(2);
    expect(store.tasks().map((task) => task.id)).toEqual([1]);
    expect(store.openCount()).toBe(1);
  });

  it('test_05_tasks_signal_is_readonly', () => {
    const store = TestBed.inject(TaskStore);
    expect('set' in store.tasks).toBe(false);
  });
});

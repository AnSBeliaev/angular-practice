import { Component, computed, signal } from '@angular/core';

interface GearItem {
  id: number;
  title: string;
}

/**
 * Задача 1.4. Выбор из фильтра
 *
 * Ситуация: пользователь выбрал «Фонарь», затем сузил поиск до «спички».
 * Фонаря на экране уже нет, а карточка выбора всё ещё показывает его.
 *
 * Что сделать: selectedId должен сбрасываться в null, когда выбранного id нет
 * в filtered. Используйте linkedSignal. Список товаров и разметку не переписывайте.
 *
 * На собесе: «Чем linkedSignal отличается от computed? Почему сброс выбора
 * нельзя делать через effect?»
 */
@Component({
  selector: 'app-t04-picker',
  templateUrl: './t04-picker.html',
})
export class T04Picker {
  readonly items = signal<GearItem[]>([
    { id: 1, title: 'Фонарь' },
    { id: 2, title: 'Палатка' },
    { id: 3, title: 'Спички' },
  ]);

  readonly query = signal('');

  readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    if (!query) {
      return this.items();
    }
    return this.items().filter((item) => item.title.toLowerCase().includes(query));
  });

  readonly selectedId = signal<number | null>(null);

  readonly selectedTitle = computed(() => {
    const id = this.selectedId();
    const item = this.items().find((entry) => entry.id === id);
    return item ? item.title : 'Ничего не выбрано';
  });

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  select(id: number): void {
    this.selectedId.set(id);
  }
}

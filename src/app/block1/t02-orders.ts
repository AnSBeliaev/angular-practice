import { Component, computed, signal } from '@angular/core';

export interface Order {
  id: number;
  title: string;
  status: 'paid' | 'new' | 'cancelled';
}

/**
 * Задача 1.2. Список заказов
 *
 * Ситуация: на странице заказов нужен поиск по названию и подпись статуса.
 * Исходный список ниже менять не нужно.
 *
 * Что сделать: шаблон на @for (track по id), @if или @empty, @switch.
 * Поиск без учёта регистра пишет в query. Подписи статусов: paid — «оплачен»,
 * new — «новый», cancelled — «отменён».
 * - input data-testid="search"
 * - каждая строка data-testid="row", внутри видны название и подпись статуса
 * - если строк нет — элемент data-testid="empty" с текстом «Ничего не найдено»
 *
 * На собесе: «Зачем track в @for? Чем @if отличается от *ngIf? Когда уместен @switch?»
 */
@Component({
  selector: 'app-t02-orders',
  templateUrl: './t02-orders.html',
})
export class T02Orders {
  readonly orders = signal<Order[]>([
    { id: 1, title: 'Клавиатура', status: 'paid' },
    { id: 2, title: 'Мышь', status: 'new' },
    { id: 3, title: 'Кабель', status: 'cancelled' },
  ]);

  readonly query = signal('');

  readonly filtered = computed(() => this.orders());
}

import { Component, computed, signal } from '@angular/core';

/**
 * Задача 1.1. Счётчик корзины
 *
 * Ситуация: бейдж корзины показывает 0, кнопки «+1» и «Сброс» ничего не меняют,
 * а «удвоенное» всегда 0.
 *
 * Что сделать: хранить количество в signal. Удвоенное — computed от него.
 * «+1» через update, сброс через set(0). В шаблоне:
 * - data-testid="count" — текущее число
 * - data-testid="doubled" — число × 2
 * - data-testid="inc" — кнопка +1
 * - data-testid="reset" — кнопка сброса
 *
 * На собесе: «Чем signal отличается от поля класса? Зачем computed, если можно
 * посчитать в шаблоне? Чем set отличается от update? Что обновляет экран в
 * zoneless-приложении?»
 */
@Component({
  selector: 'app-t01-counter',
  templateUrl: './t01-counter.html',
})
export class T01Counter {
  readonly count = signal(0);
  readonly doubled = computed(() => 0);

  increment(): void {}

  reset(): void {}
}

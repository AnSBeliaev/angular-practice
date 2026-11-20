import { Component, Injectable, inject, signal } from '@angular/core';

/**
 * Задача 2.2. Две корзины
 *
 * Ситуация: на странице два независимых счётчика. Плюс в левом увеличивает
 * и правый: у обоих один общий сервис.
 *
 * Что сделать: экземпляр CounterStore должен создаваться на каждый компонент,
 * а не один на всё приложение. Уберите providedIn: 'root' и объявите сервис
 * в providers компонента.
 *
 * На собесе: «Чем инжектор компонента отличается от корневого? Что увидит
 * дочерний компонент, а что сосед за границей провайдера?»
 */
@Injectable({ providedIn: 'root' })
export class CounterStore {
  readonly value = signal(0);

  increment(): void {
    this.value.update((current) => current + 1);
  }
}

@Component({
  selector: 'app-t06-panel',
  templateUrl: './t06-panel.html',
})
export class T06Panel {
  private readonly store = inject(CounterStore);

  protected readonly value = this.store.value;

  protected increment(): void {
    this.store.increment();
  }
}

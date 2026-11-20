import { Component, input, output } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
}

/**
 * Задача 1.3. Карточка товара
 *
 * Ситуация: карточку товара вставляют и в каталог, и в корзину. Родителю нужно
 * передать товар, подсветить выбранную карточку и узнать, когда нажали «В корзину».
 *
 * Что сделать: input() для product (обязательный) и selected (по умолчанию false),
 * output() add с id товара. Кнопка data-testid="add". На ней класс is-selected,
 * когда selected истинный. В тексте кнопки видны name и price.
 *
 * На собесе: «Чем input() отличается от @Input()? Чем output() отличается от
 * EventEmitter? Когда нужен model(), а когда пара input и output?»
 */
@Component({
  selector: 'app-product-card',
  templateUrl: './t03-product-card.html',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly selected = input(false);
  readonly add = output<number>();
}

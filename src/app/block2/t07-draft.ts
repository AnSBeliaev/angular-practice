import { Component, signal } from '@angular/core';

/**
 * Задача 2.3. Черновик, который не сохраняется
 *
 * Ситуация: «Сохранить» меняет название в объекте, но на экране остаётся
 * «Отчёт». «Мутировать молча» так и должно оставлять старый текст: клик уже
 * прошёл, а запись случается в setTimeout, когда экран сам не обновляется.
 *
 * Что сделать: save должен записать новое значение через update или set,
 * новым объектом. mutateSilently не трогайте.
 *
 * На собесе: «Почему мутация объекта внутри сигнала не обновляет шаблон?
 * Что в zoneless всё-таки запускает проверку экрана?»
 */
@Component({
  selector: 'app-t07-draft',
  templateUrl: './t07-draft.html',
})
export class T07Draft {
  readonly draft = signal([{ title: 'Отчёт' }]);

  save(): void {
    setTimeout(() => {
      this.draft()[0].title = 'Сохранено';
    });
  }

  mutateSilently(): void {
    setTimeout(() => {
      this.draft()[0].title = 'Черновик';
    });
  }
}

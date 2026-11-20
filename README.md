# Практика по Angular: блоки 1–4

12 задач под собеседование на мидл. В каждом файле есть ситуация, что сделать и вопрос, который по этой теме задают на собесе.

К каждой задаче есть тесты. Задача решена, когда её тесты зелёные. После этого вопрос из файла нужно проговорить вслух. Если ответ не собирается, задача не закрыта, даже при зелёных тестах.

Стек: Angular 22, standalone, zoneless. Документация: [angular.dev](https://angular.dev).

## Запуск

Из папки проекта:

```
npm start
npm test -- --watch=false
npm test -- --watch=false -t test_01
```

`npm start` открывает список задач на http://localhost:4200/. Сейчас тесты задач красные, так и должно быть. Зелёный только тест оглавления.

## Задачи

| Файл | Задача | Тема на собесе |
|---|---|---|
| src/app/block1/t01-counter.ts | 1.1 Счётчик корзины | signal, computed, set и update, zoneless |
| src/app/block1/t02-orders.ts | 1.2 Список заказов | @if, @for, @switch |
| src/app/block1/t03-product-card.ts | 1.3 Карточка товара | input, output, model |
| src/app/block1/t04-picker.ts | 1.4 Выбор из фильтра | linkedSignal |
| src/app/block2/t05-task-store.ts | 2.1 Хранилище задач | сервис, providedIn, inject, asReadonly |
| src/app/block2/t06-panel.ts | 2.2 Две корзины | иерархия инжекторов |
| src/app/block2/t07-draft.ts | 2.3 Черновик, который не сохраняется | что обновляет экран без zone.js |
| src/app/block3/t08-latest-search.ts | 3.1 Поиск | switchMap, mergeMap, exhaustMap |
| src/app/block3/t09-auth-interceptor.ts | 3.2 Токен в запросах | HttpInterceptorFn |
| src/app/block3/t10-auth-guard.ts | 3.3 Закрытая страница | CanActivateFn |
| src/app/block4/t11-signup.ts | 4.1 Регистрация | реактивные формы, кросс-поле |
| src/app/block4/t12-signal-signup.ts | 4.2 Регистрация на сигналах | Signal Forms |

## Правила

- Решать по порядку, блок за блоком.
- Документацию angular.dev читать можно и нужно. Готовые решения не искать. Код задачи писать самому: на собесе подсказок не будет.
- Тесты не менять. Имена классов, функций и `data-testid` из условия тоже.
- В задачах 1.4, 2.2, 2.3, 3.1 часть кода уже написана и работает неправильно. Исправлять причину, а не тест.

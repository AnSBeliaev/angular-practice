import { Observable, filter, mergeMap } from 'rxjs';

/**
 * Задача 3.1. Поиск
 *
 * Ситуация: пользователь быстро дописал запрос. Ответ на короткую строку
 * приходит позже и затирает уже показанный результат более длинной.
 *
 * Что сделать: в полёте должен оставаться только последний запрос. Пустую
 * строку не отправлять.
 *
 * На собесе: «Чем switchMap отличается от mergeMap и exhaustMap? Почему поиск
 * вешают на switchMap?»
 */
export function latestSearch(
  queries: Observable<string>,
  fetchPage: (query: string) => Observable<string[]>,
): Observable<string[]> {
  return queries.pipe(
    filter((query) => query.trim().length > 0),
    mergeMap((query) => fetchPage(query)),
  );
}

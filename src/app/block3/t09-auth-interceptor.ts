import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Задача 3.2. Токен в запросах
 *
 * Ситуация: API отвечает 401, потому что запросы уходят без токена сессии.
 *
 * Что сделать: вернуть интерсептор. Если token() не null, поставить заголовок
 * Authorization: Bearer <token>. Если токена нет, заголовок не добавлять.
 *
 * На собесе: «Чем функциональный интерсептор отличается от класса? В каком
 * порядке они выполняются? Что из этого похоже на interceptor в Axios?»
 */
export function authInterceptor(token: () => string | null): HttpInterceptorFn {
  return (req, next) => next(req);
}

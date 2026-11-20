import { Injectable, inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Задача 3.3. Закрытая страница
 *
 * Ситуация: /orders открывается без входа.
 *
 * Что сделать: authGuard. Если isAuthenticated() ложь — вернуть UrlTree на
 * /login. Если истина — пропустить переход. AuthService уже есть, сессию
 * в нём не храните заново.
 *
 * На собесе: «Чем CanActivateFn отличается от компонента-страницы? Когда
 * используют guard, а когда редирект из самого компонента?»
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAuthenticated = signal(false);
}

export const authGuard: CanActivateFn = () => {
  inject(Router);
  return true;
};

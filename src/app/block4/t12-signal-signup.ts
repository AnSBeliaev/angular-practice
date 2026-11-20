import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

/**
 * Задача 4.2. Регистрация на сигналах
 *
 * Ситуация: новая форма регистрации на Signal Forms пропускает пустые поля.
 *
 * Что сделать: signup строится из model через form() и схему.
 * - email: required и email
 * - password: required и minLength 8
 * Пустая форма invalid. «a@b.co» и пароль из 8 символов — valid.
 *
 * На собесе: «Чем Signal Forms отличаются от FormGroup? Где теперь лежит
 * значение поля и список ошибок?»
 */
@Component({
  selector: 'app-t12-signal-signup',
  templateUrl: './t12-signal-signup.html',
})
export class T12SignalSignup {
  readonly model = signal({ email: '', password: '' });
  readonly signup = form(this.model);
}

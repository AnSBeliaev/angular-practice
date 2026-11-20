import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

/**
 * Задача 4.1. Регистрация
 *
 * Ситуация: форму можно отправить пустой, пароль из одной буквы проходит,
 * а «пароль» и «ещё раз» никто не сравнивает.
 *
 * Что сделать, не переписывая шаблон:
 * - email: обязательное и похоже на почту
 * - password: обязательное, минимум 8 символов
 * - confirm: обязательное и совпадает с password
 * - если не совпало, у всей формы ошибка { mismatch: true }
 * Кнопка уже выключена, пока form.invalid. Текст ошибки почты уже в шаблоне.
 *
 * На собесе: «Чем реактивные формы отличаются от шаблонных? Что такое touched,
 * dirty и status? Куда вешать проверку, которая смотрит на два поля?»
 */
@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-t11-signup',
  templateUrl: './t11-signup.html',
})
export class T11Signup {
  readonly form = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    confirm: new FormControl('', { nonNullable: true }),
  });
}

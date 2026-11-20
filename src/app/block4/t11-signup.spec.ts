import { TestBed } from '@angular/core/testing';
import { T11Signup } from './t11-signup';

describe('t11 signup', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [T11Signup] }).compileComponents();
    const fixture = TestBed.createComponent(T11Signup);
    await fixture.whenStable();
    return fixture;
  }

  it('test_11_rejects_empty_form', async () => {
    const fixture = await render();
    const button = fixture.nativeElement.querySelector('[data-testid="submit"]') as HTMLButtonElement;
    expect(fixture.componentInstance.form.invalid).toBe(true);
    expect(button.disabled).toBe(true);
  });

  it('test_11_checks_email_password_and_confirm', async () => {
    const fixture = await render();
    const form = fixture.componentInstance.form;

    form.setValue({ email: 'a@b.co', password: '1234567', confirm: '1234567' });
    expect(form.controls.password.invalid).toBe(true);

    form.setValue({ email: 'not-email', password: '12345678', confirm: '12345678' });
    form.controls.email.markAsTouched();
    await fixture.whenStable();
    expect(form.controls.email.invalid).toBe(true);
    expect(fixture.nativeElement.querySelector('[data-testid="email-error"]')?.textContent).toContain(
      'Укажите почту',
    );

    form.setValue({ email: 'a@b.co', password: '12345678', confirm: 'другой' });
    expect(form.hasError('mismatch')).toBe(true);

    form.setValue({ email: 'a@b.co', password: '12345678', confirm: '12345678' });
    expect(form.valid).toBe(true);
  });
});

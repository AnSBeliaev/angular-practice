import { TestBed } from '@angular/core/testing';
import { T12SignalSignup } from './t12-signal-signup';

describe('t12 signal signup', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [T12SignalSignup] }).compileComponents();
    const fixture = TestBed.createComponent(T12SignalSignup);
    await fixture.whenStable();
    return fixture;
  }

  it('test_12_rejects_empty_values', async () => {
    const fixture = await render();
    expect(fixture.componentInstance.signup().valid()).toBe(false);
  });

  it('test_12_accepts_email_and_password', async () => {
    const fixture = await render();
    const signup = fixture.componentInstance.signup;

    signup.email().value.set('not-email');
    signup.password().value.set('12345678');
    expect(signup().valid()).toBe(false);

    signup.email().value.set('a@b.co');
    signup.password().value.set('short');
    expect(signup().valid()).toBe(false);

    signup.password().value.set('12345678');
    expect(signup().valid()).toBe(true);
  });
});

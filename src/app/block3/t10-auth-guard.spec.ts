import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { AuthService, authGuard } from './t10-auth-guard';

@Component({ template: '' })
class Blank {}

describe('t10 auth guard', () => {
  async function navigate(authenticated: boolean) {
    const auth = new AuthService();
    auth.isAuthenticated.set(authenticated);

    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'orders', canActivate: [authGuard], component: Blank },
          { path: 'login', component: Blank },
        ]),
        { provide: AuthService, useValue: auth },
      ],
    });

    const router = TestBed.inject(Router);
    await router.navigateByUrl('/orders');
    return router.url;
  }

  it('test_10_redirects_anonymous_user_to_login', async () => {
    expect(await navigate(false)).toBe('/login');
  });

  it('test_10_allows_authenticated_user', async () => {
    expect(await navigate(true)).toBe('/orders');
  });
});

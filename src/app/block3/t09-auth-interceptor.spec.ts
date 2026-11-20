import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { authInterceptor } from './t09-auth-interceptor';

describe('t09 auth interceptor', () => {
  function setup(token: () => string | null) {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authInterceptor(token)])),
        provideHttpClientTesting(),
      ],
    });
    const http = TestBed.inject(HttpClient);
    const backend = TestBed.inject(HttpTestingController);
    http.get('/api/orders').subscribe();
    return backend.expectOne('/api/orders');
  }

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('test_09_sets_bearer_token', () => {
    const req = setup(() => 'secret');
    expect(req.request.headers.get('Authorization')).toBe('Bearer secret');
    req.flush([]);
  });

  it('test_09_skips_header_without_token', () => {
    const req = setup(() => null);
    expect(req.request.headers.get('Authorization')).toBeNull();
    req.flush([]);
  });
});

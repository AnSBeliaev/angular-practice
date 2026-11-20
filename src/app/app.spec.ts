import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('lists the first task', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const link = fixture.nativeElement.querySelector('a[href="/block1/t01"]');
    expect(link?.textContent).toContain('1.1');
  });
});

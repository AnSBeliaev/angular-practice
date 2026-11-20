import { TestBed } from '@angular/core/testing';
import { CounterStore, T06Panel } from './t06-panel';

describe('t06 panel', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [T06Panel] }).compileComponents();
  });

  it('test_06_panels_do_not_share_a_store', async () => {
    const left = TestBed.createComponent(T06Panel);
    const right = TestBed.createComponent(T06Panel);
    await left.whenStable();
    await right.whenStable();

    (left.nativeElement.querySelector('[data-testid="inc"]') as HTMLButtonElement).click();
    await left.whenStable();
    await right.whenStable();

    expect(text(left.nativeElement)).toBe('1');
    expect(text(right.nativeElement)).toBe('0');
    expect(() => TestBed.inject(CounterStore)).toThrow();
  });
});

function text(root: HTMLElement): string {
  return root.querySelector('[data-testid="value"]')?.textContent?.trim() ?? '';
}

import { TestBed } from '@angular/core/testing';
import { T01Counter } from './t01-counter';

describe('t01 counter', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [T01Counter] }).compileComponents();
    const fixture = TestBed.createComponent(T01Counter);
    await fixture.whenStable();
    return fixture;
  }

  it('test_01_shows_zero_and_doubled_zero', async () => {
    const fixture = await render();
    const root = fixture.nativeElement as HTMLElement;
    expect(text(root, 'count')).toBe('0');
    expect(text(root, 'doubled')).toBe('0');
  });

  it('test_01_increment_updates_both_numbers', async () => {
    const fixture = await render();
    click(fixture.nativeElement, 'inc');
    click(fixture.nativeElement, 'inc');
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    expect(text(root, 'count')).toBe('2');
    expect(text(root, 'doubled')).toBe('4');
  });

  it('test_01_reset_returns_to_zero', async () => {
    const fixture = await render();
    click(fixture.nativeElement, 'inc');
    await fixture.whenStable();
    click(fixture.nativeElement, 'reset');
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    expect(text(root, 'count')).toBe('0');
    expect(text(root, 'doubled')).toBe('0');
  });
});

function text(root: HTMLElement, testId: string): string | undefined {
  return root.querySelector(`[data-testid="${testId}"]`)?.textContent?.trim();
}

function click(root: HTMLElement, testId: string): void {
  const button = root.querySelector(`[data-testid="${testId}"]`);
  if (!(button instanceof HTMLButtonElement)) {
    throw new Error(`нет кнопки [data-testid="${testId}"]`);
  }
  button.click();
}

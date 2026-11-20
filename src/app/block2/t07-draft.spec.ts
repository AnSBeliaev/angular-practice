import { TestBed } from '@angular/core/testing';
import { T07Draft } from './t07-draft';

describe('t07 draft', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [T07Draft] }).compileComponents();
    const fixture = TestBed.createComponent(T07Draft);
    await fixture.whenStable();
    return fixture;
  }

  it('test_07_silent_mutation_stays_off_the_screen', async () => {
    const fixture = await render();
    (fixture.nativeElement.querySelector('[data-testid="mutate"]') as HTMLButtonElement).click();
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(title(fixture.nativeElement)).toBe('Отчёт');
  });

  it('test_07_save_updates_the_screen', async () => {
    const fixture = await render();
    (fixture.nativeElement.querySelector('[data-testid="save"]') as HTMLButtonElement).click();
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(title(fixture.nativeElement)).toBe('Сохранено');
  });
});

function title(root: HTMLElement): string {
  return root.querySelector('[data-testid="title"]')?.textContent?.trim() ?? '';
}

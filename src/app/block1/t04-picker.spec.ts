import { TestBed } from '@angular/core/testing';
import { T04Picker } from './t04-picker';

describe('t04 picker', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [T04Picker] }).compileComponents();
    const fixture = TestBed.createComponent(T04Picker);
    await fixture.whenStable();
    return fixture;
  }

  it('test_04_filters_items', async () => {
    const fixture = await render();
    setSearch(fixture.nativeElement, 'пал');
    await fixture.whenStable();
    expect(titles(fixture.nativeElement)).toEqual(['Палатка']);
  });

  it('test_04_keeps_selection_while_item_is_visible', async () => {
    const fixture = await render();
    clickTitle(fixture.nativeElement, 'Фонарь');
    await fixture.whenStable();
    setSearch(fixture.nativeElement, 'фона');
    await fixture.whenStable();
    expect(fixture.componentInstance.selectedId()).toBe(1);
    expect(selected(fixture.nativeElement)).toContain('Фонарь');
  });

  it('test_04_clears_selection_when_filter_hides_it', async () => {
    const fixture = await render();
    clickTitle(fixture.nativeElement, 'Фонарь');
    await fixture.whenStable();
    setSearch(fixture.nativeElement, 'спич');
    await fixture.whenStable();
    expect(fixture.componentInstance.selectedId()).toBeNull();
    expect(selected(fixture.nativeElement)).toContain('Ничего не выбрано');
  });
});

function titles(root: HTMLElement): string[] {
  return [...root.querySelectorAll('[data-testid="item"]')].map((node) =>
    (node.textContent ?? '').trim(),
  );
}

function selected(root: HTMLElement): string {
  return root.querySelector('[data-testid="selected"]')?.textContent?.trim() ?? '';
}

function setSearch(root: HTMLElement, value: string): void {
  const input = root.querySelector('[data-testid="search"]') as HTMLInputElement;
  input.value = value;
  input.dispatchEvent(new Event('input'));
}

function clickTitle(root: HTMLElement, title: string): void {
  const button = [...root.querySelectorAll('[data-testid="item"]')].find((node) =>
    node.textContent?.includes(title),
  );
  (button as HTMLButtonElement).click();
}

import { TestBed } from '@angular/core/testing';
import { T02Orders } from './t02-orders';

describe('t02 orders', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [T02Orders] }).compileComponents();
    const fixture = TestBed.createComponent(T02Orders);
    await fixture.whenStable();
    return fixture;
  }

  it('test_02_renders_status_labels', async () => {
    const fixture = await render();
    expect(rows(fixture.nativeElement)).toEqual([
      'Клавиатура оплачен',
      'Мышь новый',
      'Кабель отменён',
    ]);
  });

  it('test_02_filters_by_title', async () => {
    const fixture = await render();
    setSearch(fixture.nativeElement, 'мыш');
    await fixture.whenStable();
    expect(rows(fixture.nativeElement)).toEqual(['Мышь новый']);
  });

  it('test_02_shows_empty_state', async () => {
    const fixture = await render();
    setSearch(fixture.nativeElement, 'zzz');
    await fixture.whenStable();
    expect(rows(fixture.nativeElement)).toEqual([]);
    expect(fixture.nativeElement.querySelector('[data-testid="empty"]')?.textContent).toContain(
      'Ничего не найдено',
    );
  });
});

function rows(root: HTMLElement): string[] {
  return [...root.querySelectorAll('[data-testid="row"]')].map((node) =>
    (node.textContent ?? '').replace(/\s+/g, ' ').trim(),
  );
}

function setSearch(root: HTMLElement, value: string): void {
  const input = root.querySelector('[data-testid="search"]');
  if (!(input instanceof HTMLInputElement)) {
    throw new Error('нет поля [data-testid="search"]');
  }
  input.value = value;
  input.dispatchEvent(new Event('input'));
}

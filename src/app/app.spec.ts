import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the initial count', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-testid="count"]')?.textContent).toContain('0');
    expect(compiled.querySelector('[data-testid="doubled"]')?.textContent).toContain('0');
  });

  it('filters tasks by the search query', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    setSearch(fixture.nativeElement, 'шаб');
    await fixture.whenStable();

    expect(titles(fixture.nativeElement)).toEqual(['Шаблоны']);
    expect(fixture.nativeElement.querySelector('[data-testid="visible-count"]')?.textContent).toContain(
      '1',
    );
  });

  it('clears the selection when the filter hides it', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    clickTitle(fixture.nativeElement, 'Сигналы');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('[data-testid="detail"]')?.textContent).toContain(
      'Сигналы',
    );

    setSearch(fixture.nativeElement, 'роутер');
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('[data-testid="detail-empty"]')?.textContent).toContain(
      'Ничего не выбрано',
    );
  });

  it('keeps a silent mutation off the screen until update', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    (fixture.nativeElement.querySelector('[data-testid="mutate"]') as HTMLButtonElement).click();
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(titles(fixture.nativeElement)[0]).toContain('Сигналы');

    (fixture.nativeElement.querySelector('[data-testid="rename"]') as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(titles(fixture.nativeElement)[0]).toContain('Переименовано');
  });
});

function titles(root: HTMLElement): string[] {
  return [...root.querySelectorAll('[data-testid="task-title"]')].map(
    (node) => node.textContent?.trim() ?? '',
  );
}

function setSearch(root: HTMLElement, value: string): void {
  const input = root.querySelector('[data-testid="search"]') as HTMLInputElement;
  input.value = value;
  input.dispatchEvent(new Event('input'));
}

function clickTitle(root: HTMLElement, title: string): void {
  const row = [...root.querySelectorAll('[data-testid="task-title"]')].find((node) =>
    node.textContent?.includes(title),
  );
  row?.closest('button')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
}

import { TestBed } from '@angular/core/testing';
import { ProductCard } from './t03-product-card';

describe('t03 product card', () => {
  it('test_03_shows_product_and_selected_class', async () => {
    const fixture = TestBed.createComponent(ProductCard);
    fixture.componentRef.setInput('product', { id: 7, name: 'Фонарь', price: 1200 });
    fixture.componentRef.setInput('selected', true);
    await fixture.whenStable();

    const button = fixture.nativeElement.querySelector('[data-testid="add"]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    expect(button.classList.contains('is-selected')).toBe(true);
    expect(button.textContent).toContain('Фонарь');
    expect(button.textContent).toContain('1200');
  });

  it('test_03_emits_product_id', async () => {
    const fixture = TestBed.createComponent(ProductCard);
    fixture.componentRef.setInput('product', { id: 7, name: 'Фонарь', price: 1200 });
    await fixture.whenStable();

    const ids: number[] = [];
    fixture.componentInstance.add.subscribe((id) => ids.push(id));
    (fixture.nativeElement.querySelector('[data-testid="add"]') as HTMLButtonElement).click();

    expect(ids).toEqual([7]);
    const button = fixture.nativeElement.querySelector('[data-testid="add"]') as HTMLButtonElement;
    expect(button.classList.contains('is-selected')).toBe(false);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskRow } from './task-row';

describe('TaskRow', () => {
  let component: TaskRow;
  let fixture: ComponentFixture<TaskRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskRow],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskRow);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', { id: 1, title: 'Сигналы', status: 'open' });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits the task id', () => {
    const emitted: number[] = [];
    component.pick.subscribe((id) => emitted.push(id));

    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();

    expect(emitted).toEqual([1]);
  });
});

export type TaskStatus = 'open' | 'done' | 'blocked';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

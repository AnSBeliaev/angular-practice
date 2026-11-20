import { delay, of, Subject } from 'rxjs';
import { latestSearch } from './t08-latest-search';

describe('t08 latest search', () => {
  it('test_08_keeps_only_the_latest_query', async () => {
    const queries = new Subject<string>();
    const fetchPage = (query: string) => of([query]).pipe(delay(query.length === 1 ? 40 : 10));
    const seen: string[][] = [];

    latestSearch(queries, fetchPage).subscribe((page) => seen.push(page));
    queries.next('a');
    queries.next('ab');

    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(seen).toEqual([['ab']]);
  });
});

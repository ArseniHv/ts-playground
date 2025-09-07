// src/index.test.ts
import { findById } from './index';

interface Item { id: number; name: string }

test('findById returns correct item by id', () => {
  const arr: Item[] = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ];
  const res = findById(arr, 2);
  expect(res).toEqual({ id: 2, name: 'B' });
});

test('findById returns undefined if not found', () => {
  const arr: Item[] = [{ id: 1, name: 'A' }];
  const res = findById(arr, 99);
  expect(res).toBeUndefined();
});

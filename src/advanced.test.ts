// src/advanced.test.ts
import { formatPadding, processEntity, readValue, safeParse, unsafeParse } from './advanced';

test('formatPadding with number pads correctly', () => {
  expect(formatPadding(42)).toBe('   42'); // pad to width 5
});

test('processEntity narrows to Date and string', () => {
  const d = new Date('2020-01-01T00:00:00.000Z');
  expect(processEntity(d)).toContain('Date:');
  expect(processEntity('hello')).toBe('String:HELLO');
});

test('readValue returns property value if exists', () => {
  const o: unknown = { a: 1, b: 'x' };
  expect(readValue(o, 'b')).toBe('x');
});

test('safeParse returns unknown and unsafeParse returns any', () => {
  const r1 = safeParse('{"x":1}');
  expect(typeof r1).toBe('object');

  const r2 = unsafeParse('{"x":1}');
  expect((r2 as any).x).toBe(1);
});

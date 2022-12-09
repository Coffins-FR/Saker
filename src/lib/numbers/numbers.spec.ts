import test from 'ava';

import numbers from './numbers';

test('number range', (t) => {
  t.deepEqual(numbers(1, 10), numbers(1, 10));
});

test('number reverse range', (t) => {
  t.deepEqual(numbers(10, 1), numbers(10, 1));
});

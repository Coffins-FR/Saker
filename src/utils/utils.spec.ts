import test from 'ava';

import iter from './_iter';
import random from './_random';

const randomNb = random(1, 10);
const iteration = iter({});

test('_random', (t) => {
  t.is(randomNb, randomNb);
});

test('_iter', (t) => {
  t.is(iter({}).length, iteration.length);
});

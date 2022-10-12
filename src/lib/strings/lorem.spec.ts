import test from 'ava';

import lorem from './lorem';

const iter = 3;

test('sentences', (t) => {
  t.is(lorem(iter, 'sentences').length, iter);
});

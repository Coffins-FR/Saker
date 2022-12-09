import test from 'ava';

import lorem from './lorem';

const iter = 3;

test('sentences', (t) => {
  t.is(lorem(iter, 'sentences').length, iter);
});

test('paragraphs', (t) => {
  t.is(lorem(iter, 'paragraphs').length, iter);
});

test('words', (t) => {
  t.is(lorem(iter, 'words').length, iter);
});

test('chars', (t) => {
  t.is(lorem(iter, 'chars').length, iter);
});

import test from 'ava';

import Saker from './object';

const sample = ['Onigiri', 'Saké', 'Sushi', 'Panco', 'Sashimi', 'Bun', 'Bao'];
const oneOf = Saker.oneOf(sample);
const manyOf = Saker.manyOf(20, sample);
const log = Saker.repeat(10, {
  name: Saker.oneOf(sample),
  tags: Saker.manyOf(4, sample),
  street: Saker.lorem(3, 'paragraphs', 4, true),
  age: Saker.oneOf(Saker.numbers(18, 99)),
  // adresses: Saker.repeat(2, {
  //   street: Saker.lorem(3, 'sentences'),
  // }),
});

console.log(...log);
// console.log({ name: Saker.lorem(3, 'paragraphs', 8) });

test('oneOf', (t) => {
  t.is(oneOf, oneOf);
});

test('manyOf', (t) => {
  t.is(manyOf.length, manyOf.length);
});

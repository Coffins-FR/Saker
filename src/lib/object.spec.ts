import test from 'ava';

import Saker from './object';

const sample = ['Onigiri', 'Saké', 'Sushi', 'Panco', 'Sashimi', 'Bun', 'Bao'];
const oneOf = Saker.oneOf(sample);
const manyOf = Saker.manyOf(20, sample);
const log = Saker.repeat(10, {
  name: Saker.oneOf(sample),
  tags: Saker.manyOf(4, sample),
  adresses: Saker.repeat(2, {
    street: Saker.oneOf(['Rue de la Boustiffaille', 'Avenue du Lard']),
  }),
})();

const obj = { adresse: Saker.oneOf(['Rue', 'Avenue']) };

console.log(...log);
console.log(obj);

test('oneOf', (t) => {
  t.is(oneOf, oneOf);
});

test('manyOf', (t) => {
  t.is(manyOf.length, manyOf.length);
});

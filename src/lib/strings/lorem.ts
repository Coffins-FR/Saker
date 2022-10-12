import data from '../../sample/lorem.json';
import random from '../../utils/_random';
import manyOf from '../randomizers/manyOf';

export default function lorem(iteration = 1, typeOfText: string) {
  const sample: string = data.text;
  switch (typeOfText) {
    case 'sentences':
      return manyOf(iteration, sample.split('.'));
    case 'words':
      return manyOf(iteration, sample.split(' '));
    case 'paragraphs':
      return [...Array(iteration)].map(() =>
        manyOf(random(1, 6), sample.split('.')).join('.')
      );
    case 'chars':
      return manyOf(iteration, sample.split('')).filter((char) => char !== ' ');
    default:
      console.error('You can only get paragraphs, words, sentences or chars');
      console.error(
        'Use paragraphs, words, sentence or chars as parameter for typeOfText'
      );
      return [];
  }
}

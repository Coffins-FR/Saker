import data from '../../sample/lorem.json';
import random from '../../utils/_random';
import manyOf from '../randomizers/manyOf';
/** @hidden */
export default function lorem(
  iteration = 1,
  typeOfText: string,
  isRandom?: boolean,
  paragraphSize?: number
) {
  const sample: string = data.text;
  switch (typeOfText) {
    case 'sentences':
      if (isRandom) {
        return manyOf(iteration, sample.split('.'));
      } else {
        return sample.split('.').slice(0, iteration);
      }
    case 'words':
      if (isRandom) {
        return manyOf(iteration, sample.split(' '));
      } else {
        return sample.split(' ').slice(0, iteration);
      }
    case 'paragraphs':
      if (isRandom) {
        return [...Array(iteration)]
          .map(() =>
            manyOf(random(1, paragraphSize), sample.split('.')).join('.')
          )
          .map((element) => element + '.');
      } else {
        return [...Array(iteration)]
          .map((_, index) =>
            sample
              .split('.')
              .slice(
                index * paragraphSize,
                paragraphSize * index + paragraphSize
              )
              .join('.')
          )
          .map((element) => element + '.');
      }
    case 'chars':
      if (isRandom) {
        return manyOf(iteration, sample.split('')).filter(
          (char) => char !== ' '
        );
      } else {
        return sample
          .split('')
          .filter((char) => char !== ' ')
          .slice(0, iteration);
      }
    default:
      console.error('You can only get paragraphs, words, sentences or chars');
      console.error(
        'Use paragraphs, words, sentence or chars as parameter for typeOfText'
      );
      return [];
  }
}

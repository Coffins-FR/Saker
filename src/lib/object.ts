import iter from '../utils/_iter';

import manyOf from './randomizers/manyOf';
import oneOf from './randomizers/oneOf';
import lorem from './strings/lorem';

const Saker = {
  /**
   * @param iteration length of the array
   * @returns return an array of length iteration of the given object
   */
  repeat: (iteration: number, obj: Record<string, unknown>) =>
    function () {
      return [...Array(iteration)].map(() => iter(obj));
    },
  /**
   * @param sample: ReadonlyArray<string | number>
   * @returns return a random string or number given as param
   */
  oneOf: (sample: ReadonlyArray<string | number>) =>
    function () {
      return oneOf(sample);
    },
  /**
   * @param sample: ReadonlyArray<string | number>
   * @returns return a random string, number or obj given as param
   */
  manyOf: (iteration = 1, sample: ReadonlyArray<string | number>) =>
    function () {
      return manyOf(iteration, sample);
    },
  /**
   * @param typeOfText: can be a string 'paragraphs', 'words', 'sentence' or 'chars'
   * @param iteration: number of strings you want to return, default: 1
   * @param isRandom: allowing random text or not, usefull for testing
   * @param paragraphSize: size of paragraph, to use in pair with 'paragraph'
   * @returns return an array of string if you choose words, sentences or chars
   * @returns return an array of array of strings with length radomly choose between 1 and 6
   */
  lorem: (
    iteration: number,
    typeOfText: string,
    paragraphSize?: number,
    isRandom?: boolean
  ) =>
    function () {
      return lorem(iteration, typeOfText, isRandom, paragraphSize);
    },
};

export default Saker;

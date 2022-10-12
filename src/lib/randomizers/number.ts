import random from '../../utils/_random';
/**
 * @param min: minimum number you want to return
 * @param max: maximum number you want to return
 * @returns return a random number between min and max
 */
export default function number(min: number, max: number) {
  return random(min, max);
}

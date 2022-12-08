/**
 * @param min min number
 * @param max max number
 * @return return a random number between min and max
 */
export default function random(min: number, max?: number) {
  if (max === null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

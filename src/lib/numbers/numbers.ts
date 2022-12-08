import random from '../../utils/_random';
/** @hidden */
export default function numbers(min: number, max: number, isRandom?: boolean) {
  const arrayLength: number = Math.abs(max - min);
  const array: ReadonlyArray<number> = new Array(arrayLength);
  switch (isRandom) {
    case true:
      return [...array]
        .fill(1)
        .map(() => (max < min ? random(max, min) : random(min, max)));
    default:
      return [...array]
        .fill(1)
        .map((_, index) => (max < min ? index + max : index + min));
  }
}

import random from '../../utils/_random';

export default function manyOf(
  iteration: number,
  sample: ReadonlyArray<string | number>
) {
  return [...Array(iteration)].map(() => sample[random(0, sample.length - 1)]);
}

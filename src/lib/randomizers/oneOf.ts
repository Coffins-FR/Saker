import random from '../../utils/_random';

export default function oneOf(sample: ReadonlyArray<string | number>) {
  return sample[random(0, sample.length - 1)];
}

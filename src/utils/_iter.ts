export default function iter(obj: Record<string, unknown>) {
  // eslint-disable-next-line functional/no-loop-statement
  for (const [key, value] of Object.entries(obj)) {
    obj = {
      ...obj,
      [key]: typeof value !== 'function' ? value : value(),
    };
  }
  return obj;
}

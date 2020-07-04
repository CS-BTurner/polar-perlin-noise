/**
 * Maps range [x1 -> y1] to [x2 -> y2].
 */
export function map(value: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

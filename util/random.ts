export function randomInt(): number;
export function randomInt(max: number): number;
export function randomInt(min: number, max: number): number;
export function randomInt(min?: number, max?: number): number {
  if (min === undefined) {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
  if (max === undefined) {
    return Math.floor(Math.random() * min);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

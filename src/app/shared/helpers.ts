/**
 * Get the intersection between two arrays
 * @returns Returns an array holds the intersection values
 */
export function intersect<T>(a: T[], b: T[]): T[] {
  return a.filter(Set.prototype.has, new Set(b));
}

/**
 * Returns random integer value between the specified range
 * @param min Minimum value to get (inclusive)
 * @param max Maximum value to get (inclusive)
 * @returns Random integer value
 */
export function getRandomIntValue(min: number = 0, max: number = 1): number {
  return min + Math.floor(Math.random() * (max + 1));
}

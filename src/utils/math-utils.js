/**
 *
 * @param {number[]} numberArray
 * @returns {number}
 */
export function calculateAverage(numberArray = []) {
  if (numberArray.length === 0) {
    return 0;
  }
  return numberArray.reduce((acc, curr) => acc + curr, 0) / numberArray.length;
}

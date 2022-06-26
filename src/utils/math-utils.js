/**
 *
 * @param {number[]} numberArray
 * @returns {number}
 */
export function calculateAverage(numberArray = []) {
  if (numberArray.length === 0) {
    return 0;
  }
  return (
    numberArray.reduce((acc, curr) => {
      if (isNaN(curr)) {
        throw new TypeError("Argument must be an array of numbers.");
      }
      return acc + curr;
    }, 0) / numberArray.length
  );
}

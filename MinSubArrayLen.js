/**
 * Write a function called minSubArrayLen which accepts two parameters -
 * an array of positive integers and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray
 * of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 *
 * @param {number[]} numArray
 * @param {number} count
 * @return {boolean}
 */
function minSubArrayLen(numArray, count) {
  if (numArray.length === 0) return 0;
  let left = 0;
  let right = 0;
  let sum = numArray[0];
  let min = numArray.length + 1;

  while (right < numArray.length) {
    if (sum >= count) {
      min = Math.min(min, right - left + 1);
      sum -= numArray[left];
      left++;
    } else {
      right++;
      sum += numArray[right];
    }
  }

  return min === numArray.length + 1 ? 0 : min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

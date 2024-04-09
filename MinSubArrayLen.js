/**
 * Write a function called minSubArrayLen which accepts two parameters -
 * an array of positive integers and a positive integer.
 *
 * This function should return the minimal length of a contiguous subarray
 * of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 *
 * * STEP
 * 1. add a edge case for the empty array;
 * 2. initialize the left and right edge to 0;
 * 3. initialize the sum to the first element of the num array
 * 4. initialize the minimum length to the last index of the array
 * 5. Create a loop while the while is within the array length
 * 6. If the sum is less than the count, increment the right edge and add it to the cumulative sum
 * 7. If the sum is greater or equal, update the min by the minimum between the current minimum and
 *    the next (right+1) right edge and the previous left edge (-left),
 *    remove the left edge from the cumulative sum and increment the left edge;
 * 8. At the end, if the minimum didn't change (means It's still equal to the its initialized value)
 *    return 0, if not return the new minimum
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
    if (sum < count) {
      right++;
      sum += numArray[right];
    } else {
      min = Math.min(min, right + 1 - left);
      sum -= numArray[left];
      left++;
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

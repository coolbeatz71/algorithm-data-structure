/**
 * Write a fuction called maxSubArraySum which accepts an array of numbers and a number called n.
 * The function should calculate the maximum sum of n consecutive element in the array
 *
 * * STEP
 *
 * We actually need two limit variables,
 * the left limit (i) start from `0`, and the right limit (j) start from `count`
 * so we can slice the initial array to copies that has length equal to count
 * The solution has a time complexity of O(n * m)
 *
 * 1. Initialize the j to count
 * 2. create sumArray that will hold the sum all the slices
 * 3. Add an edge case if the main array is empty
 * 4. Create the loop for the left limit that start from 0,
 *    and must always ends at the position where we will have enough elements until the last right limit
 *    means `numArray.length - count + 1`
 * 5. Slice the initial array from each `i` to each `j`
 * 6. find the sum of eaech created slice
 * 7. Push the result to sumArray
 * 8. At the end of the for loop, we need to calculate the max for the sumArray
 *
 * @param {number[]} numArray
 * @param {number} count
 *
 * @return {number}
 */
function myAttempt(numArray, count) {
  let j = count;
  let sumArray = [];
  if (numArray.length < count) return null;
  for (let i = 0; i < numArray.length - count + 1; i++) {
    let sum = numArray.slice(i, j).reduce((a, b) => a + b, 0);
    sumArray.push(sum);
    j++;
  }

  return Math.max(...sumArray);
}

/**
 * This solution uses sliding window pattern and consecutive for loops,
 * It has time and space complexity of O(n)
 *
 * * STEP
 *
 * 1. Create two variables maxSum, and tempSum that will be initialized to 0;
 *    The maxSum holds the final maximum of sum, and tempSum hold the temporary sum
 * 2. Create the first loop that start from 0, to the `count` limit
 * 3. Calculate the sum of all the element and store it to the tempSum
 * 4. Create a second loop that starts from `count` to the last element of the initial array
 * 5. Create edges of the window from the `i` and the `count` values
 * 6. Update the tempSum by adding the rightEdge and substracting the leftEdge
 *    This will simulate increment of the window: this is the *sliding window pattern*
 * 7. Update each maxSum by the max of sumMax to be compared to tempSum
 * 8. Return the last maxSum.
 *
 * @param {number[]} numArray
 * @param {number} count
 *
 * @return {number}
 */
function maxSubArraySum(numArray, count) {
  let maxSum = 0;
  let tempSum = 0;
  if (numArray.length < count) return null;

  for (let i = 0; i < count; i++) {
    maxSum += numArray[i];
  }
  tempSum = maxSum;

  for (let i = count; i < numArray.length; i++) {
    let leftEdge = numArray[i - count];
    let rightEdge = numArray[i];
    tempSum += rightEdge - leftEdge;
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));

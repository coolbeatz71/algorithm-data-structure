/**
 * Write a function SumZero which accept a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or
 * undefined if a pair does not exist
 *
 * * STEPS
 *
 * 1. Create two index pointers at the beginning and end of the array.
 * 2. Create a loop that will keep searching while left < right, means while we are still in the array.
 * 3. Get the sum of index left and index right.
 * 4. If the sum is 0, we exist the loop, and return the value based on the index
 * 5. If the sum is greater than 0, we decrement the right value
 * 6. If the sum is less than 0, we increment the left value
 *
 * * NOTES
 * The array must be sorted fot the algorithm to make sense
 * @param number[] numArray
 * @returns {number[]}
 */
function SumZero(numArray) {
  let left = 0;
  let right = numArray.length - 1;

  while (left < right) {
    let sum = numArray[left] + numArray[right];

    if (sum === 0) {
      return [numArray[left], numArray[right]];
    }

    if (sum > 0) right--;
    else left++;
  }
}

console.log(SumZero([-3, -2, -1, 0, 1, 2]));

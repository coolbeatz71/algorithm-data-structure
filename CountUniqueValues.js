/**
 * Implement a function called countUniqueValues, which accept a sorted array of number,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but It will always e sorted.
 *
 * * STEP
 *
 * This solution uses a simple approach of counting the length a set created from the array.
 * It has a tim complexity of O(n)
 *
 * @param {number[]} numArray
 * @returns {number}
 */
function myAttempt(numArray) {
  const uniqueValues = [...new Set(numArray)];

  return uniqueValues.length;
}

/**
 * This uses the multiple pointer pattern
 *
 * * STEP
 *
 * 1. Create first pointer (i) at the beginning of the array
 * 2. Create a second pointer (j) next to i
 * 3. Loop until arrives at the end of the array (j <= numArray.length)
 * 4. If the value at index i and j differs, increment i, and replace value of i by the value of index j.
 * 5. Increment j to continue the loop.
 *
 * At the end of the loop, unique values will be pushed to the left side of i,
 * We only need to output the pointer i, which is its last position after all iteration;
 *
 * @param {number[]} numArray
 * @returns {number}
 */
function myAttemptUsingMultiPointer(numArray) {
  let i = 0;
  let j = 1;

  while (j <= numArray.length) {
    if (numArray[i] !== numArray[j]) {
      i++;
      numArray[i] = numArray[j];
    }
    j++;
  }

  return i;
}

/**
 * This uses the multiple pointer pattern but with a for loop
 * * NOTE
 *
 * This will fail in the case the numArray is empty,
 * so a safe guard condition is required at the beginning
 *
 * @param {number[]} numArray
 * @returns {number}
 */
function countUniqueValues(numArray) {
  let i = 0;
  if (numArray.length === 0) return i;
  for (let j = 1; j < numArray.length; j++) {
    if (numArray[i] !== numArray[j]) {
      i++;
      numArray[i] = numArray[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

/**
 * Write a function that accept 2 arrays.
 * The function should return TRUE if every value in the array has
 * it's corresponding value squared in the second array.
 *
 * The frequency of values must be the same.
 *
 * @param {Number[]} array1
 * @param {Number[]} array2
 * @return {Boolean}
 *
 *  * My Steps:
 *
 * 1. Check if the lengths of the two arrays are equal. If not, return false.
 * 2. Check if either of the arrays contains zero. If so, count the number of zeros in each array.
 *    If the counts are not equal, return false.
 * 3. Remove zeros from both arrays.
 * 4. Get product of all the elements of the two arrays.
 * 5. Check if the squared product of the second array is equal to the product of the first array.
 *    If so, return true. Otherwise, return false.
 */

function myAttempt(array1, array2) {
  const lenArray1 = array1.length;
  const lenArray2 = array2.length;

  if (lenArray1 !== lenArray2) {
    return false;
  }

  // case where arrays may contain zero
  if (array1.includes(0) || array2.includes(0)) {
    const zeroCountArray1 = array1.filter((val) => val === 0).length;
    const zeroCountArray2 = array2.filter((val) => val === 0).length;

    if (zeroCountArray1 !== zeroCountArray2) {
      return false;
    }
  }

  // multiple all the element of the two arrays by removing the zeros
  const multipleArray1 = array1
    .filter((val) => val !== 0)
    .reduce((a, b) => a * b);

  const multipleArray2 = array2
    .filter((val) => val !== 0)
    .reduce((a, b) => a * b);

  return multipleArray2 === multipleArray1 ** 2;
}

function arraySquaredCorrespondingFrequency(arr1, arr2) {
  const lenArray1 = arr1.length;
  const lenArray2 = arr2.length;

  if (lenArray1 !== lenArray2) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(myAttempt([2, 2, 3, 0], [4, 4, 0, 0]));

/**
 * Write a function that accepts two strings,
 * and return true if the strings are anagrams of each other.
 *
 * * My Steps
 * 1. If the two strings have different length then return 0.
 * 2. Loop through the 1st string and return the frequency counter
 * 3. Loop through the 2nd string and return the frequency counter
 * 4. Loop through the frequencyCounter1 and check:
 *    - if all the key from frequencyCounter1 exist in frequencyCounter2
 *    - if all the 2 frequency counters have the same keys/values pair
 *
 * @param {String} str1
 * @param {String} str2
 * @return {Boolean}
 */
function myAttempt(str1, str2) {
  const lenString1 = str1.length;
  const lenString2 = str2.length;

  if (lenString1 !== lenString2) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

function Anagram(str1, str2) {
  const lenString1 = str1.length;
  const lenString2 = str2.length;

  if (lenString1 !== lenString2) {
    return false;
  }

  let frequencyCounter = {};

  for (let char of str1) {
    frequencyCounter[char]
      ? (frequencyCounter[char] += 1)
      : (frequencyCounter[char] = 1);
  }

  for (let char of str2) {
    if (!frequencyCounter[char]) {
      return false;
    } else {
      frequencyCounter[char] -= 1;
    }
  }

  return true;
}

console.log(myAttempt("", ""));
console.log(myAttempt("azz", "zaz"));
console.log(myAttempt("iceman", "cinema"));
console.log(myAttempt("car", "rat"));

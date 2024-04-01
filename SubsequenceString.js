/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string form
 * a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string
 * appear somewhere in the second string, without their order changing.
 *
 * * STEPS
 *
 * 1. Create two variables multi pointers (i, j) they will both loop from the beginning
 * 2. Add an edge to return true if the first string is empty
 * 3. Loop through the second string, while we are still within the second string
 * 4. If both characters at str1 and str2 macthes, let's check the next str1 character
 * 5. If both characters don't match, lets check the next str2 character.
 * 6. If we reach the end of str1 first, that means all the characters macthes and we exist the loop with a TRUE
 * 7. If we reach the end of str2 first, that means no characters is matching, we exist the loop with a FALSE
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("abc", "abracadabra"));

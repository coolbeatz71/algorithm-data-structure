/**
 * Write a function called findLongestSubstring, which accepts a string
 * and returns the length of the longest substring with all distinct characters
 *
 * * STEP
 * This uses sling window techniques and set
 * 1. initialize the start and end to 0;
 * 2. Create a set, and initialize longest variable to 0;
 * 3. add an edge if the main string is empty to return 0;
 * 4. Create a loop while end edge is within the string lebgth;
 * 5. if the set doesn't contain the character at end edge, add it to the set,
 *    increment the end edge, update longest by the maximum
 *    between the set size and the current longest;
 * 6. if the set contains the character at end edge, delete the character at start edge
 *    and increment the start edge;
 *
 * * NOTE:
 *   Incrementing the end edge and deleting the start edge from the cumulative set
 *   is the key to the sliding window here;
 *
 * @param {string} str
 * @returns {number}
 */
function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let longest = 0;
  let charSet = new Set();

  if (str.length === 0) return start;

  while (end < str.length) {
    if (!charSet.has(str[end])) {
      charSet.add(str[end]);
      longest = Math.max(charSet.size, longest);
      end++;
    } else {
      charSet.delete(str[start]);
      start++;
    }
  }
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6

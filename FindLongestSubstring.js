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

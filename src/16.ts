function lengthOfLongestSubstring(s: string): number {
  let retVal = 0;
  let cursor = 0;
  let charArray = [...s];
  let seen = new Set<string>();
  for (let i = 0; i < charArray.length; i++) {
    while (seen.has(charArray[i])) {
      seen.delete(charArray[cursor]);
      cursor += 1;
    }

    seen.add(charArray[i]);
    retVal = Math.max(seen.size, retVal);
  }
  return retVal;
}

console.assert(lengthOfLongestSubstring("") === 0, "empty input");
console.assert(lengthOfLongestSubstring("a") === 1, "single char");
console.assert(lengthOfLongestSubstring("abba") === 2, "pairs");
console.assert(lengthOfLongestSubstring("abcdefg") === 7, "no match");
console.assert(lengthOfLongestSubstring("zxyzxyz") === 3, "example 1");
console.assert(lengthOfLongestSubstring("xxxx") === 1, "example 2");

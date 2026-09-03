function lengthOfLongestSubstring(s: string): number {
  let retVal = 0;
  let charArray = [...s];
  let seen: string[] = [];
  for (let i = 0; i < charArray.length; i++) {
    if (seen.includes(charArray[i])) {
      seen = seen.slice(seen.indexOf(charArray[i]) + 1)
    }

    seen.push(charArray[i]);
    retVal = Math.max(seen.length, retVal);
  }
  return retVal;
}

console.assert(lengthOfLongestSubstring("") === 0, "empty input");
console.assert(lengthOfLongestSubstring("a") === 1, "single char");
console.assert(lengthOfLongestSubstring("abba") === 2, "pairs");
console.assert(lengthOfLongestSubstring("abcdefg") === 7, "no match");
console.assert(lengthOfLongestSubstring("zxyzxyz") === 3, "example 1");
console.assert(lengthOfLongestSubstring("xxxx") === 1, "example 2");

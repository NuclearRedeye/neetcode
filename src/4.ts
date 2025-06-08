import { equals2d } from "./utils/array.utils.ts";

function isAnagram(s: string, t: string): boolean {
  let retVal = false
  if (s.length === t.length) {
      const clone = [...t];
      for (let i = 0; i < s.length; i++) {
          let index = clone.indexOf(s[i]);
          if (index != -1) {
              clone.splice(index, 1);
          }
      }
      retVal = (clone.length === 0);
  }
  return retVal;
}

function groupAnagrams(strs: string[]): string[][] {
  let retVal: string[][] = [];
  for (let i = 0; i < strs.length; i++) {
    let found = false;
    const consider: string = strs[i];
    for (const value of retVal) {
      if (isAnagram(consider, value[0])) {
        value.push(consider);
        found = true;
        break;
      }
    }
    if (found === false) {
      retVal.push([consider]);
    }
  }
  return retVal;
}

const testCase1 = groupAnagrams(["act","pots","tops","cat","stop","hat"]).sort((a, b) => a.length - b.length);
console.assert(equals2d(testCase1, [["hat"], ["act", "cat"], ["pots", "tops", "stop"]]))


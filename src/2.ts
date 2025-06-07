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

console.assert(isAnagram("racecar", "carrace") === true);
console.assert(isAnagram("jam", "jar") === false);
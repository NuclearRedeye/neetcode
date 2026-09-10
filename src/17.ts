function characterReplacement(s: string, k: number): number {
  let retVal: number = 0;

  // Count the frequency of chars.
  const frequency = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    frequency.set(s[i], frequency.has(s[i]) ? frequency.get(s[i]) as number + 1 : 1);
  }

  // Sort Map
  const sorted = Array.from(frequency.entries()).sort((a, b) => b[1] - a[1]);

  // Iterate, starting with the highest frequency char, and work to the lowest.
  for (const [char, count] of sorted) {
    // Only bother if theres a chance to find a longer string...
    if (count + k < retVal) {
      break;
    }

    // Iterate over the string, and replace up to K chars that are not the same as char.
    let cursor: number = 0;
    let substitutions: number[] = [];
    for (let i = 0; i < s.length; i++) {
      // Non matching char
      if (s[i] !== char) {
        if (k > 0) {
          // Will we exceed our allowed substitutions?
          if (substitutions.length === k) {
            cursor = substitutions.shift() as number + 1;
          }
          // register the index for the substitution
          substitutions.push(i);
        } else {
          cursor = i + 1;
        }
      }

      retVal = Math.max((i - cursor) + 1, retVal);
    }
  }

  return retVal;
}

console.assert(characterReplacement("", 1) === 0, "Empty input");
console.assert(characterReplacement("a", 1) === 1, "Single char");
console.assert(characterReplacement("XYYX", 0) === 2, "No substituion");
console.assert(characterReplacement("XYYX", 2) === 4, "Example 1");
console.assert(characterReplacement("AAABABB", 1) === 5, "Example 2");
console.assert(characterReplacement("ABXABXABXABX", 2) === 4, "Example 3");

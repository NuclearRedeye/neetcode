function hasDuplicate(nums: number[]) {
  const seen: Set<number> = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

console.assert(hasDuplicate([1, 2, 3, 3]) === true);
console.assert(hasDuplicate([1, 2, 3, 4]) === false);
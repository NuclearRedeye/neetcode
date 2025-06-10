import { equals } from "./utils/array.utils.ts";

function topKFrequent(nums: number[], k: number): number[] {
  const retVal: number[] = [];
  const frequency: Map<number, number> = new Map();
  for (const num of nums) {
    let count = (frequency.get(num) || 0) + 1;
    frequency.set(num, count);
  }
  
  const sorted = [...frequency.entries()].sort((a, b) => a[1] - b[1]);
  for (let i = sorted.length - k; i >= 0 && i < sorted.length; i++) {
    retVal.push(sorted[i][0]);
  }
  return retVal.sort();
}

console.assert(equals(topKFrequent([1,2,2,3,3,3], 2), [2, 3]));
console.assert(equals(topKFrequent([7,7], 1), [7]));
console.assert(equals(topKFrequent([1,1,1,2,2,3], 2), [1, 2]));
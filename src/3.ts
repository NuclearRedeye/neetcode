import {equals} from './utils/array.utils.ts'

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let ii = i + 1; ii < nums.length; ii++) {
      if (nums[i] + nums[ii] === target) {
        return [i, ii];
      }
    }
  }
  return [];
}

console.assert(equals(twoSum([3,4,5,6], 7), [0,1]));
console.assert(equals(twoSum([4,5,6], 10), [0,2]));
console.assert(equals(twoSum([5,5], 10), [0,1]));
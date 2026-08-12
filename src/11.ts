import { equals } from './utils/array.utils.ts';

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [1 + left, 1 + right];
    }
    if (sum < target) {
      left += 1;
    }
    if (sum > target) {
      right -= 1;
    }
  }
  return [];
};

console.assert(equals(twoSum([1, 2, 3, 4], 3), [1, 2]));
console.assert(equals(twoSum([], 1), []));
console.assert(equals(twoSum([1, 2, 3, 4], 7), [3, 4]));
console.assert(equals(twoSum([2, 3], 5), [1, 2]));
console.assert(equals(twoSum([-3, -1, 2, 4], 3), [2, 4]));
console.assert(equals(twoSum([1, 2, 3, 4], 100), []));

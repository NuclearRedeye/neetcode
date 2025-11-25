import { equals } from "./utils/array.utils.ts";

function productExceptSelf(nums: number[]): number[] {
  let retVal: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let accumulator: number = 1;
    for (let ii = 0; ii < nums.length; ii++) {
      if (i == ii) {
        continue;
      }
      accumulator *= nums[ii];
    }
    retVal.push(accumulator);
  }
  return retVal;
}

console.assert(equals(productExceptSelf([1,2,4,6]), [48,24,12,8]));
console.assert(equals(productExceptSelf([-1,0,1,2,3]), [0,-6,0,0,0]));
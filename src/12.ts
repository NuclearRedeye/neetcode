import { equals2d } from './utils/array.utils.ts';

// function threeSum(numbers: number[]): number[][] {
//   let retVal: number[][] = [];
//   let seen = new Set<string>();
//   for (let i = 0; i < numbers.length; i++) {
//     for (let ii = 0; ii < numbers.length; ii++) {
//       if (i === ii) continue;
//       for (let iii = 0; iii < numbers.length; iii++) {
//         if (iii === i || iii === ii) {
//           continue;
//         }

//         if (numbers[i] + numbers[ii] + numbers[iii] === 0) {
//           let indexes: number[] = [numbers[i], numbers[ii], numbers[iii]].sort((a,b) => a - b);
//           if (seen.has(indexes.toString())) {
//             continue;
//           }
//           seen.add(indexes.toString());
//           retVal.push(indexes);
//         }
//       }
//     }
//   }
//   return retVal;
// }

function threeSum(numbers: number[]): number[][] {
  let retVal: number[][] = [];
  let seen = new Set<string>();
  let sorted = numbers.toSorted((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum < 0) {
        left += 1;
      }
      else if (sum > 0) {
        right -= 1;
      }
      else {
        let indexes: number[] = [sorted[i], sorted[left], sorted[right]].sort((a,b) => a - b);
        if (!seen.has(indexes.toString())) {
          seen.add(indexes.toString());
          retVal.push(indexes);
        }
        left++;
        right--;
      }
    }
  }
  return retVal;
}


console.assert(equals2d(threeSum([]), []), 'empty');
console.assert(equals2d(threeSum([0, 0]), []), 'too short');
console.assert(equals2d(threeSum([1, 2, 3]), []), 'no solution');
console.assert(equals2d(threeSum([0, 0, 0]), [[0, 0, 0]]), 'all zeros');
console.assert(equals2d(threeSum([0, 0, 0, 0]), [[0, 0, 0]]), 'all zeros, deduped');
console.assert(equals2d(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]), 'example');
console.assert(equals2d(threeSum([-2, 0, 1, 1, 2]), [[-2, 0, 2], [-2, 1, 1]]), 'repeated value in a triple');
console.assert(equals2d(threeSum([-2, -2, 0, 0, 2, 2]), [[-2, 0, 2]]), 'many duplicates, one triple');
console.assert(equals2d(threeSum([10, -1, -9, 2, 7, -9]), [[-9, -1, 10], [-9, 2, 7]]), 'multi digit values');

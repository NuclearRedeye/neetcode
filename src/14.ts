// function calculateArea(height: number[], start: number, end: number, ceiling: number): number {
//   let retVal = 0;
//   for (let i = start; i < end; i++) {
//     retVal += ceiling - height[i];
//   }
//   console.log(`Pool: start: ${start}, end: ${end}, area: ${retVal}`);
//   return retVal;
// }

// function trap(height: number[]): number {
//   let retVal: number = 0;

//   for (let left = 0; left < height.length; left++) {
//     let highest = left + 1;
//     for (let right = left + 1; right < height.length; right++) {
//       // We find an equal or higher wall.
//       if (height[right] >= height[left]) {
//         // Make sure there is a space between.
//         if (right - left > 1) {
//           retVal += calculateArea(height, left + 1, right, Math.min(height[right], height[left]));
//           // Advance
//           left = right - 1;
//         }
//         break;
//       }

//       // Update the highest tracker
//       highest = (height[right] > height[highest]) ? right : highest;

//       // Have we hit the end?
//       if (right + 1 >= height.length) {
//         // Revert to to the highest wall we found, and make sure there is a space between.
//         if (highest - left > 1) {
//           retVal += calculateArea(height, left + 1, highest, Math.min(height[highest], height[left]));;
//           // Advance
//           left = highest - 1;
//         }
//         break;
//       }
//     }
//   }
//   return retVal;
// };

function trap(height: number[]): number {
  let retVal: number = 0;
  let left = 0;
  let right = height.length - 1;
  let highestLeft = 0;
  let highestRight = 0;
  while (left < right) {
    highestRight = Math.max(highestRight, height[right]);
    highestLeft = Math.max(highestLeft, height[left]);

    if (highestLeft < highestRight) {
      retVal += highestLeft - height[left];
      left++;
    } else {
      retVal += highestRight - height[right];
      right--;
    }

  }
  return retVal;
}


console.assert(trap([]) === 0, "empty input");
console.assert(trap([0]) === 0, "too short");
console.assert(trap([0, 0, 0, 0, 0]) === 0, "all zeroes");
console.assert(trap([0, 1, 2, 3, 4, 4, 3, 2, 1, 0]) === 0, "no solution");
console.assert(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]) === 9, "example");
console.assert(trap([0, 2, 0, 4, 1, 0, 1, 3, 2, 1]) === 9, "example 2");
console.assert(trap([5, 1, 2]) === 1, "end check");
console.assert(trap([5, 4, 3, 2, 1]) === 0, "descent");
console.assert(trap([1, 2, 3, 4, 5]) === 0, "ascent");

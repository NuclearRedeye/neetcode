function maxArea(heights: number[]): number {
  let retVal: number = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const area = (Math.min(heights[left], heights[right])) * (right - left);
    if (area > retVal) {
      retVal = area;
    }

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return retVal;
};

console.assert(maxArea([]) === 0, "empty input");
console.assert(maxArea([0]) === 0, "too short");
console.assert(maxArea([0,0,0,0]) === 0, "no solution");
console.assert(maxArea([1, 7, 2, 5, 4, 7, 3, 6]) === 36, "example 1");
console.assert(maxArea([2, 2, 2]) === 4, "example 2");

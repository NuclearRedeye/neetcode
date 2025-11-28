function longestConsecutive(nums: number[]): number {
  let retVal = 0;
  let counter = nums.length ? 1 : 0;
  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    let a = nums[i];
    let b = nums[i + 1];
    if (a === b ) {
      continue;
    }
    
    if (a + 1 === b) {
      counter += 1;
      continue;
    }

    retVal = (counter > retVal) ? counter : retVal;
    counter = 1;
  }
  return (counter > retVal) ? counter : retVal;
}

console.assert(longestConsecutive([2,20,4,10,3,4,5]) === 4);
console.assert(longestConsecutive([0,3,2,5,4,6,1,1]) === 7);
console.assert(longestConsecutive([]) === 0);
console.assert(longestConsecutive([0, -1]) === 2);
console.assert(longestConsecutive([9,1,-3,2,4,8,3,-1,6,-2,-4,7]) === 4);
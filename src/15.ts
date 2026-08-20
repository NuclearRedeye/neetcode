function maxProfit(prices: number[]): number {
  let retVal = 0;
  for (let i = 0; i < prices.length; i++) {
    let highest = 0;
    for (let ii = i; ii < prices.length; ii++) {
      highest = Math.max(prices[ii] - prices[i], highest);
    }
    retVal = Math.max(retVal, highest);
  }
  return retVal;
};

console.assert(maxProfit([10, 1, 5, 6, 7, 1]) === 6, "example 1");
console.assert(maxProfit([10, 8, 7, 5, 2]) === 0, "example 2");

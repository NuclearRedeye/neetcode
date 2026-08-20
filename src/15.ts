function maxProfit(prices: number[]): number {
  let retVal = 0;
  let lowest = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[lowest] > prices[i]) {
      lowest = i;
    }
    retVal = Math.max(prices[i] - prices[lowest], retVal);
  }
  return retVal;
}

console.assert(maxProfit([10, 1, 5, 6, 7, 1]) === 6, "example 1");
console.assert(maxProfit([10, 8, 7, 5, 2]) === 0, "example 2");

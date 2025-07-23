// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// My Solution
// prices -> array of whole positive numbers. Never []. No decimals.
// returned -> the maximum PROFIT. If no profit, return 0
function maxProfit(prices: number[]): number {
    let minPrice = prices[0]
    let profit = 0
 
    for (const price of prices) {
        if (price < minPrice) minPrice = price;

        let diff = price - minPrice;
        if (diff > profit) profit = diff;
    }
 
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 5);


// Other Solutions
const maxProfit = (prices: number[]): number => {
  if (prices.length === 1) return 0;

  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};


// 2
function maxProfit(prices: number[]): number {
    let max = 0;
    let sell = 1;
    let buy = 0;

    while(sell < prices.length) {
        if(prices[sell] > prices[buy]) {
            max = Math.max(max, prices[sell] - prices[buy])
        } else {
            buy = sell;
        }
        sell++;
    }

    return max;
};
const maxProfit = (prices) => {
  let cheapestPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    cheapestPrice = Math.min(cheapestPrice, prices[i]);

    profit = Math.max(profit, prices[i] - cheapestPrice);
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

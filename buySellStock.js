/* 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

function maxProfit(prices){
   let maxProfit = 0;
   let buyPrice = prices[0];
   for(let sell=1;sell<prices.length;sell++){
    let sellPrice = prices[sell];
    let profit = sellPrice - buyPrice;
    maxProfit = Math.max(profit,maxProfit);
    if(buyPrice>sellPrice) buyPrice = sellPrice
   }
   return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));

//Time complexity is O(n) and space complexity is O(1)

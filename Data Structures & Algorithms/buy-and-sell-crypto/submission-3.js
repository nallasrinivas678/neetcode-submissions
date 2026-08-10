class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0, right = 1, maxProfit = 0;
        while(right < prices.length){
            let profit = prices[right] - prices[left];
            if(profit > 0){
                right++;
                maxProfit = Math.max(maxProfit, profit);
            }
            else{
                left = right
                right++;
            }
        }
        return maxProfit;
    }
}

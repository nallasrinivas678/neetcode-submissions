class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;
        let right = 1;

        while(right < prices.length){
            if (prices[left] < prices[right]) {
                let currentProfit = prices[right] - prices[left];
                maxProfit = Math.max(currentProfit, maxProfit);
            } else {
                left = right;
            }
            right++;
        }

        return maxProfit;
    }
}

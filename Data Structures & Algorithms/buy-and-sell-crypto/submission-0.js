class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let left = 0;
        let right = 0;

        while(right < prices.length){
           if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            maxP = Math.max(maxP, profit);
           }
           else {
            left = right;
           }
           right++;
        }
        return maxP;
    }
}

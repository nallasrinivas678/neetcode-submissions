class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l=0;
        for(let r=1; r < prices.length; r++){
            if(prices[r] > prices[l]){
                maxProfit = Math.max(maxProfit, prices[r]-prices[l]);
            }
            else {
                l = r;
            }
        }
        return maxProfit;
    }
}

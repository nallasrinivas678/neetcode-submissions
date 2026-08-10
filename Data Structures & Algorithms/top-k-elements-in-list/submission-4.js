class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //idea is to store number and its frequency in hashmap or object and then sort by that hashmap desc and then get top k elements
        let freq = {};
        //[1:1, 2:2, 3:3]
        for(let i=0; i < nums.length; i++){
            freq[nums[i]] = (freq[nums[i]] || 0)+1;
        }

        let sortedFreq = Object.entries(freq).sort((a,b) => b[1] - a[1]);

        let result = [];
        for(let [key,value] of sortedFreq){
            result.push(Number(key));
            if(result.length === k) return result;
        }
        

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequencyCtr = {};

        for(let num of nums){
            frequencyCtr[num] = (frequencyCtr[num] || 0)+1;
        }

        let buckets = new Array(nums.length+1).fill().map(()=> []);

        console.log(frequencyCtr);

        for(let key in frequencyCtr){
            buckets[frequencyCtr[key]].push(key);
        }

        let result = [];
        for(let i = buckets.length -1; i >= 0 && result.length < k ; i--){
            if(buckets[i].length > 0){
                result.push(...buckets[i]);
            }
        }

        return result.slice(0,k);
        
        
    }
}

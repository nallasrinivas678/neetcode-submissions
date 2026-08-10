class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        //[1,2,2,3,3,3]
        //{1:1, 2:2, 3:3}
        for(let num of nums){
            map.set(num, (map.get(num) || 0)+1);
        }

        //create buckets to group elements by frequency
        let buckets = [];
        for(let i=0; i < nums.length+1; i++){
            buckets.push([]);
        }

        for(let [num, freq] of map.entries()){
            buckets[freq].push(num);
        }

        //collect top k elements
        let result = [];
        for(let f = buckets.length -1; f >= 0 && result.length < k; f--){
            if(buckets[f].length > 0){
                for(let val of buckets[f]){
                    result.push(val);
                    if(result.length ===k) return result;
                }
            }
        }

        
    }
}

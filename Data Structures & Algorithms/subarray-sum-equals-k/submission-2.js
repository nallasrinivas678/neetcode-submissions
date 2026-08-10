class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        //[1,3,1,4,3], 8
        //[0,1,3,5,9,12]
        const prefixSums = [0];
        let runningSum = 0;
        let subArrays = 0;

        for(let num of nums){
            runningSum += num;
            prefixSums.push(runningSum);
        }

        const seen = new Map();

        for(let num of prefixSums){
            let complement = num - k;
            if(seen.has(complement)){
                subArrays += seen.get(complement);
            }
            seen.set(num, (seen.get(num) || 0)+1);
        }

        return subArrays;
    }

}

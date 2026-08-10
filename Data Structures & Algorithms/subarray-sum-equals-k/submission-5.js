class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSums = [0];
        let runningSum = 0;
        let count = 0;

        for(let num of nums){
            runningSum += num;
            prefixSums.push(runningSum);
        }

        //arr:       [2,-1,1,2]
        //prefixSum: [0,2,1,2,4]

        //p[j] - p[i] = k
        //p[j] - k = p[i];
        const seen = new Map();
        for(let num of prefixSums){
            let complement = num-k;

            if(seen.has(complement)){
                count += seen.get(complement);
            }
            seen.set(num, (seen.get(num) || 0)+1);
        }

        return count;
    }
}

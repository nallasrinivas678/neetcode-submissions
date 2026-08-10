class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLen = Infinity;
        let l = 0;
        let r = 0;
        let sum = 0;
        

        while( r< nums.length){
            sum += nums[r];

            while(sum >= target){
                minLen = Math.min(r-l+1, minLen);
                sum = sum - nums[l];
                l++;
            }
            r++
        }

        return minLen === Infinity ? 0 : minLen;
    }
}

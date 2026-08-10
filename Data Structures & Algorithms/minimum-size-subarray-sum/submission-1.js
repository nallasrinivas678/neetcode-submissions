class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Infinity;
        let l=0;
        let sum = 0;
        for(let r=0; r < nums.length; r++){
             sum += nums[r];

             // Shrink window from left while sum is still >= target
             while(sum >= target){
                res = Math.min(r-l+1, res);
                sum = sum - nums[l];
                l++;
             }
        }
        return res === Infinity ? 0: res;
    }
}

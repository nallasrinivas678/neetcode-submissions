class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = new Map();
        for(let i=0; i < nums.length; i++){
            let complement = target - nums[i];
            if(complements.has(complement)){
                return [complements.get(complement), i];
            }
            complements.set(nums[i], i);
        }
        
    }
}

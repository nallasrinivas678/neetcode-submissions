class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map(); //key: number, value: index
        for(let i=0; i < nums.length; i++){
            const complement = target - nums[i];

            if(seen.has(complement)){
                return [seen.get(complement), i];
            }

            // Store current number and its index for future lookups
            seen.set(nums[i], i);
        }
    }
}

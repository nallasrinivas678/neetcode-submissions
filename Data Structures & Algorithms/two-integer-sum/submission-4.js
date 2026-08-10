class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //idea is to store number and its index in hashmap
        //then check if its complement exists in hashmap return its indices
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

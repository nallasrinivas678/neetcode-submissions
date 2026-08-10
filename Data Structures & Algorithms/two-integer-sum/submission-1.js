class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //nums[i] = sum - nums[j];
        //[3,4,5,6], target = 7
        //store numbers in map for each index and check against complement
        //map = {3:0}
        const map = new Map(); 
        for(let i=0; i < nums.length; i++){
            let complement = target - nums[i];
            if(map.has(complement)){
                return [map.get(complement), i];
            }
            map.set(nums[i],i);
        }
        return [];

    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //a+b = target
        //{3:0, }
        let complements = new Map();
        for(let i=0; i < nums.length;i++){
            let diff = target - nums[i];
            if(complements.has(diff)){
                return [complements.get(diff), i];
            }
            else complements.set(nums[i], i);
        }
    }
}

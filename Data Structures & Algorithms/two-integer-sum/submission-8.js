class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //use complement logic
        //[3,4,5,6] , target = 7
        //7-3 = 4  , comps = {3:0, 4:1}
        let comps = new Map();
        for(let i=0; i < nums.length; i++){
            let comp = target - nums[i];
            if(comps.has(comp)) return [comps.get(comp), i];
            comps.set(nums[i], i);
        }
        return [];
    }
}

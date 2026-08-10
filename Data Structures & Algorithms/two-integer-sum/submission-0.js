class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let complements = {};
        //{4:0, 3:1, 2:2, 1:3}
        for(let i=0; i < nums.length; i++){
            let num = nums[i];
            let complement = target - num;

            if(complements[num] !== null && complements[num] !== undefined){
                return [i, complements[num]]
            }
            else {
                complements[complement] = i;
            }
        }
    }
}

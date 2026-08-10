class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 1;
        let right = 1;
        //[1,1,2,3,4]
        for(let right = 1; right < nums.length; right++){
            if(nums[right] !== nums[right-1]){
                nums[left] = nums[right];
                left++;
            }
        }
        return left;

    }
}

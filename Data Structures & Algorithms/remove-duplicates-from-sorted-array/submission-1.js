class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 0;
        let n = nums.length;

        for(let right=1; right < n; right++){ //fast pointer
            if(nums[left] !== nums[right]){
                left++;
                nums[left] = nums[right];  //place unique element
            }
        }
        return left+1;
    }
}

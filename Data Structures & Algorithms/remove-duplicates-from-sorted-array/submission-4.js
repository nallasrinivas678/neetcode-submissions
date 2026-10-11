class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length === 0) return 0;

        let left = 0;
        //idea is to fill array with unique numbers
        for(let right=1; right < nums.length; right++){

            if(nums[left] !== nums[right]){
                left++; //move to next position to set unique element
                nums[left] = nums[right];// to set unique element
            }

        }

        return left+1; //no of unique elements
    }
}

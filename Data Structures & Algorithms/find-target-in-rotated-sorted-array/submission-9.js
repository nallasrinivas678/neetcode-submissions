class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //In sorted array, left half or right half is sorted
        let left = 0;
        let right = nums.length -1;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] === target) return mid;
            //check if left is sorted
            else if(nums[left] <= nums[mid]){
                //if target lies in left sorted half
                if(nums[left] <= target && target < nums[mid]){
                    right = mid-1;
                }
                else left = mid+1;

            }
            //right half is sorted
            else {
                //if target lies in right sorted half
                if(nums[right] >= target && target > nums[mid]){
                    left = mid+1;
                }
                else right = mid-1;
            }
        }
        return -1;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let left = 0;
        let right = nums.length-1;

        while(left < right){
            let mid = Math.floor((left+right)/2);

            //upward slope
            if(nums[mid] < nums[mid+1]){
                left = mid+1;
            }
            else right = mid; //mid might be the peak element we dont want to skip it
        }

        return left;   //once we exit while loop , left === right
    }
}

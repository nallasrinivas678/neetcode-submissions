class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;

        //[3,4,5,6,1,2]
        
        //l=0, r=5
        //l=4, r=5
        //l=4, r=3
        while(left < right){
            let mid = Math.floor((left+right)/2);

            //iter1:mid=2, 5 > 2, min will be on right half
            //iter2:mid=4, 1 > 2, min will be on left half
            if(nums[mid] > nums[right]){
                left = mid +1;
            }
            else right = mid;
        }

        return nums[left];
    }
}

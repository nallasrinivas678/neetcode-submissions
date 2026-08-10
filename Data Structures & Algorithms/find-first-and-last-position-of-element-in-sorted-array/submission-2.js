class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        //idea is to use regular binary search but once we find the target element
        //to find first occurence move towards left , right = mid-1
        //to find last occurence move towards right, left = mid+1
    const findBoundary = (isFirst) => {
        let left = 0;
        let right = nums.length-1;
        let result = -1;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(nums[mid] === target){
                result = mid;
                if(isFirst){
                    right = mid-1;
                }
                else left = mid+1;
            }
            else if(target > nums[mid]){
                left = mid+1;
            }
            else right = mid-1
        }
        return result;
    }
        return [findBoundary(true), findBoundary(false)];
    }
}

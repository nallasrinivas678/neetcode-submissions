class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        var window = new Set();
        let left = 0;
        for(let right = 0; right < nums.length; right++){
            if(window.has(nums[right])){
                return true;
            }

            window.add(nums[right]);

            //to keep window size <=k 
            if(right -left >= k){
                window.delete(nums[left]);
                left++;
            }
        }
        return false;
        
    }
}

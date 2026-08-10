class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let l=0;
        let r = nums.length-1;
        k = k % nums.length;

        //reverse whole array first
        while(l < r){
            [nums[l], nums[r]] = [nums[r], nums[l]]; //swapping syntax
            l++;
            r--;
        }

        //reverse left portion
        let p1=0;
        let p2 = k-1;
        while(p1 < p2){
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]]; //swapping syntax
            p1++;
            p2--;
        }

        //reverse remaining array
        let i=k;
        let j = nums.length-1;
        while(i < j){
            [nums[i], nums[j]] = [nums[j], nums[i]]; //swapping syntax
            i++;
            j--;
        }
    }
}

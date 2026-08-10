class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // [-1,0,1,2,-1,-4]
        nums = nums.sort((a,b) => a-b);
        let result = [];

        //idea: a+b+c =0
        for(let i=0; i < nums.length-2; i++)
        {
            let left = i+1;
            let right = nums.length -1;

            //to skip duplicates
            if(i > 0 && nums[i-1] === nums[i]) continue;

            while(left < right){
                let target = nums[i]+nums[left]+nums[right];
                if(target === 0){
                    result.push([nums[i], nums[left], nums[right]])
                    left++;
                    right--;
                    while(left < right && nums[left] === nums[left-1]) left++;
                    while(left < right && nums[right] === nums[right+1]) right--;
                }
                else if(target > 0){
                    right--;
                }
                else {
                    left++;
                }
            }
        }
        return result;
    }
}

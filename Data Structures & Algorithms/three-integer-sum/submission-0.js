class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        //sort 
        nums.sort((a,b) => a- b);
        for(let i =0; i < nums.length - 2; i++){

            if(i > 0 && nums[i] === nums[i-1]){
                continue; //we dont want to consider duplicates so skip it
            }
            let left = i+1;
            let right = nums.length -1;
            while(left < right){
                let threeSum = nums[i] + nums[left]+ nums[right];
                if(threeSum === 0){
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    //to skip duplicates
                    while(left < right && nums[left] === nums[left-1]) left++;
                    while(left < right && nums[right] === nums[right+1]) right--;

                }
                else if(threeSum < 0){
                    left++;
                }
                else {
                    right--;
                }
            }
        }
        return result;
    }
}

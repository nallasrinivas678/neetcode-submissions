class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];

        nums = nums.sort((a,b) => a-b); //sorting: O(nlogn)

        for(let i=0; i < nums.length -2; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue; //dedup at top level loop
            //use two pointer approach to track target value
            //a+b+c= 0 -> means a+b = -c , here we can use two pointer approach pattern 
            //similar like two sum problem for sorted array
            let left = i+1; 
            let right = nums.length-1;

            while(left < right){
                let sum = nums[i]+ nums[left]+ nums[right];

                if(sum === 0){
                    result.push([nums[i], nums[left], nums[right]]);
                    while(left < right && nums[left] === nums[left+1]) left++;
                    while(left < right && nums[right] === nums[right-1]) right--;
                    left++;
                    right--;
                }
                else if(sum < 0){
                    left++;
                }
                else right--;
            }
        }

        return result;
    }
}

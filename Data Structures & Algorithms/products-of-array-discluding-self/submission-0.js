class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //input [1,2,4,6]
        const result = new Array(nums.length).fill(1);

        //prefix
        for(let i=1; i < nums.length; i++){
            result[i] = result[i-1] * nums[i-1]; 
        }

        //postfix
        let postfix = 1;
        for(let j= nums.length -1; j >= 0; j--){
            result[j] *= postfix;
            postfix *= nums[j];
        }

        return result;

    }
}

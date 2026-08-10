class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    twoSum(numbers, target) {
        //idea is to use two pointers left and right.
        let left = 0;
        let right = numbers.length - 1;

        //[1,2,3,4] target = 3
        while(left < right){
            let sum = numbers[left]+numbers[right];
        
            if(target === sum){
                return [left+1, right+1];
            }
            else if(sum > target){
                right--;
            }
            else {
                left++
            }
        }
    }
}

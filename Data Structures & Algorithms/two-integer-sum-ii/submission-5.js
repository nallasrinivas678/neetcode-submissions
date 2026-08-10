class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        //[1,2,3,4], t=3

        while(left < right){
            let sum = numbers[left] + numbers[right];
            if(sum > target) right--;
            else if(sum < target) left++;
            else return [left+1, right+1];
        }
    }
}

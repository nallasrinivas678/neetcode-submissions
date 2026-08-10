class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lp =0;
        let rp = numbers.length - 1;

        while(lp < rp){
            let sum = numbers[lp] + numbers[rp];
            if(sum > target) rp--;
            if(sum < target) lp++;

            if(sum === target) return [lp+1, rp+1];
        }
        

    }
}

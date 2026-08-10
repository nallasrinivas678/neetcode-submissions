class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a-b); //o(n)
        let result = [];

        //idea: a+b+c = 0
        //we need skip for duplicates
        for(let i=0; i < nums.length -2; i++){
            let lp = i+1
            let rp = nums.length -1;

            if(i > 0 && nums[i] === nums[i-1]) continue; //to skip duplicates

            while(lp < rp){
                let threesum = nums[i]+nums[lp]+nums[rp];
                if(threesum === 0){
                    result.push([nums[i], nums[lp], nums[rp]]);
                    lp++; //move pointers forward to find another pairs
                    rp--;
                    while(lp < rp && nums[lp] === nums[lp-1]) lp++; //to skip duplicates
                    while(lp < rp && nums[rp] === nums[rp+1]) rp--; //to skip duplicates
                }
                else if(threesum > 0){
                    rp--;
                }
                else{
                    lp++;
                }
            }
        }
        return result;
    }
}

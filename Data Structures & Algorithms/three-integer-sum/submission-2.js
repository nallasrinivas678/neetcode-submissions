class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a-b); //o(n)

        let result = [];

        //idea is to find all combintaions which result to sum = 0
        for(let i=0; i < nums.length -2; i++){
        
         if(i > 0 && nums[i] === nums[i-1]) continue; //to skip duplicates

          let lp=i+1;
          let rp= nums.length-1;

        while(lp < rp){

            let threeSum = nums[i]+nums[lp]+nums[rp];

            if(threeSum === 0){
                result.push([nums[i], nums[lp], nums[rp]]);
                lp++; //move pointers forward
                rp--;

                while(lp < rp && nums[lp] === nums[lp-1]) lp++; //to skip duplicate numbers
                while(lp < rp && nums[rp] === nums[rp+1]) rp--;
            }
            else if(threeSum > 0){
                rp--;
            }
            else{
                lp++
            }

        }

        }

        return result;
    }
}

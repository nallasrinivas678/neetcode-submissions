class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        for(let i =0; i < nums.length; i++){
            let item = nums[i];
            if(map[item] != undefined){
                map[item] = map[item]+1;
            }
            else {
                map[item] = 1;
            }

            if(map[item] > 1) return true;
        }

        return false;
    }
}

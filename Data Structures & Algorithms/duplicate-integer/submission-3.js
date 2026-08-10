class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        for(let num of nums){
            map.set(num, (map.get(num) || 0)+1);
            if(map.get(num) > 1) return true;
        }
        
        return false;
    }
}

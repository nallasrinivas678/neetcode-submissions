class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {

        const first = this.lowerBound(nums, target)
        //first can be index which is out of bound eg: [1,3,5,7], target=9
        if(first === nums.length || nums[first] !== target) return [-1,-1]

        //why upperbound-1, since we need to find last value that matched to target.
        //upper bound will return next index value for target
        const last = this.upperBound(nums, target) - 1;
        return [first, last]
    }

     lowerBound(nums, target){
        let l =0;
        let r = nums.length;
        while(l < r){
            let mid = Math.floor((l+r)/2);
             //[5,7,7,8,8,10], target = 8
             //Iter1-> l:0, r= 6, mid = 3 nums[mid] = 7, 8 < 8, r= 3
             //Iter2-> l:0, r= 3, mid = 1 nums[mid] = 7, 7 < 8, so l=1
             //Iter3-> l:1, r=3, mid =2 nums[mid]=7, 7<8, so l=2
             //Iter4-> l:2, r=3, mid=2 nums[mid]=7, 7<8, so l=3
             //while condition fails since l=3, r=3 and loop exists, so return left = 3
            //discard left half
            if(nums[mid] < target){
                l = mid+1;
            }
            else {
                r = mid;
            }
        }
        return l;

    }

    upperBound(nums, target){
        let l =0;
        let r = nums.length;
        while(l < r){
            let mid = Math.floor((l+r)/2);
            //[5,7,7,8,8,10], target = 8
            //Iter1-> l:0, r= 6, mid = 3 nums[mid] = 7, 8 <= 8, so l = 4
            //Iter2-> l:4, r= 6, mid =5 nums[mid] = 8, 10 <= 8, so r =5
            //Iter3-> l=4, r=5, mid = 4, nums[mid] =8, 8 <=8, so l=5
            //Iter4-> l=5, r= 5, mid=5 nums[mid]=10, 10<=8, false so r=5
            //while condition fails and loop exists, so return left = 5
            if(nums[mid] <= target){
                l = mid+1;
            }
            else {
                r = mid;
            }
        }
        return l;
    }
}

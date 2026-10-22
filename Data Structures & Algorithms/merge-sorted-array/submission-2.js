class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let p1 = m-1; //start at last actual element in nums1
        let p2 = n-1; //start at last element of nums2
        let p3 = m+n-1; //assume final nums1 will have length of m+n
        
        //idea is to use two pointers from backside.since two arrays already sorted. we can assume that nums1 can have space of m+n length filled with 0's
        //compare elements from nums1 and nums2 at each position from backwards and fill greater num in nums1 array. for each iteration move back pointers respectively
        while(p2 >=0){
            if(p1 >=0 && nums1[p1] > nums2[p2]){
                nums1[p3] = nums1[p1];
                p1--;
            }
            else{
                nums1[p3] = nums2[p2];
                p2--;
            }
            p3--;
        }
    }
}

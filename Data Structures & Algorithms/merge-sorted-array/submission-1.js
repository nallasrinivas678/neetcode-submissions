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

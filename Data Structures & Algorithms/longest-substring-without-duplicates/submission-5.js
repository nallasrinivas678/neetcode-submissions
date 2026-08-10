class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //idea is to use sliding window
        //use set to track unqiue elements from string
        //if we find duplicates in set shrink window from left, else expland window

        let set = new Set();
        let left = 0;
        let right = 0;
        let maxLength = 0;

        while(right < s.length){
            if(!set.has(s[right])){
                set.add(s[right]);
                right++;
                maxLength = Math.max(maxLength, set.size);
            }
            else {
                set.delete(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}

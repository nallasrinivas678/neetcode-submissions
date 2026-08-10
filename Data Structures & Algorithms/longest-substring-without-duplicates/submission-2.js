class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //idea is to use sliding window technique
        //start left and right pointers at index i and move towards right, expand window and check if its 
        //repeating or not and store max length at same time
        //if there is a duplicate char, start deleting it in set and increment left pointer

        //zxyzxyz
        //l
        //   r
        let maxLength = 0;
        let left = 0;
        let right = 0;
        let uniqueChars = new Set();

        while(right < s.length){
            if(!uniqueChars.has(s[right])){
                uniqueChars.add(s[right]);
                right++;
                maxLength = Math.max(maxLength, uniqueChars.size);
            }
            else{
                uniqueChars.delete(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}

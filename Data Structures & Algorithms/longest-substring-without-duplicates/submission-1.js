class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set();
        let left = 0, right =0, maxLength = 0;
        while(right < s.length){
            if(!charSet.has(s[right])){
                charSet.add(s[right]);
                right++;
                maxLength = Math.max(maxLength, charSet.size);
            }
            else{
                charSet.delete(s[left]);
                left++;
            }
        }
        return maxLength;
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let right =0;
        let maxLength = 0;

        //zxyzxyz
        //  l
        //     r

        while(right < s.length){
            
            if(!set.has(s[right])){
                set.add(s[right]);
                right++
            }
            else {
                set.delete(s[left]);
                left++
            }

            maxLength = Math.max(maxLength, set.size);
        }

        return maxLength;
    }
}

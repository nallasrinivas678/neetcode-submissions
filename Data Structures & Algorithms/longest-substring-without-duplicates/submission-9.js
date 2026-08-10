class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //zxyzxyz
        let set = new Set();
        let l =0; 
        let maxLength = 0;
        for(let r=0; r < s.length; r++){
            while(set.has(s[r])){
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            maxLength = Math.max(maxLength, set.size)
        }
        return maxLength;
    }
}

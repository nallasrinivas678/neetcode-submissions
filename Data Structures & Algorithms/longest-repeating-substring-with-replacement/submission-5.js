class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let maxFreq = 0;
        let count = new Map();
        let l = 0;
        let r = 0;
        while(r < s.length) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(s[r]));
            //window length - maxFreq > k, violation shrink from left
            if((r - l + 1) - maxFreq > k){
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            maxLength = Math.max(maxLength, r - l + 1);
            r++;
        }
        return maxLength;
    }
}

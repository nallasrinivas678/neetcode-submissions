class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //AAABABB, substring contiguous AAA
        //brute force
        //we can use sliding window 

        let l = 0;
        let r = 0;
        let maxFreq = 0;
        let map = new Map();
        let maxLen = 0;

        for(r=0; r < s.length; r++){
            map.set(s[r], ( map.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[r]));
            while(r-l+1 - maxFreq > k){
                map.set(s[l], map.get(s[l])-1);
                l++;
            }
            maxLen = Math.max(maxLen, r - l + 1);
        }
        return maxLen;
    }
}

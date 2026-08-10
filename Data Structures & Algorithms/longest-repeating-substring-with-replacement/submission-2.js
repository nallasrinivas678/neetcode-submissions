class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let maxFreq = 0;
        let res = 0;
        let l=0;
        for(let r=0;r <s.length; r++){
            map.set(s[r], (map.get(s[r]) ||0)+1);
            maxFreq = Math.max(map.get(s[r]), maxFreq);

            //shrink window from left if it requires more than k replacements
            //window length: r-l+1
            while(r-l+1 - maxFreq > k){
                map.set(s[l], map.get(s[l])-1);
                l++;
            }

            res = Math.max(res, r-l+1);
        }
        return res;
    }
}

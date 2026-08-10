class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let freq1 = new Map();
        let freq2 = new Map();
        for(let i=0; i < s.length; i++)
        {
            let char = s[i];
            let char2 = t[i];
            freq1.set(char, (freq1.get(char) || 0)+1);
            freq2.set(char2, (freq2.get(char2) || 0)+1);
        }
        for(let [key, value] of freq1)
        {
            if(!freq2.has(key)) return false;
            if(value !== freq2.get(key)) return false;
        }
        return true;

    }
}

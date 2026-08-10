class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //freq coounter pattern
        let freqCtr1 = new Map();
        let freqCtr2 = new Map();

        //if lengths dont match it means its not an anagram
        if(s.length !== t.length) return false;

        //keep each char frequency in map
        for(let i=0; i < s.length; i++){
            freqCtr1.set(s[i], ( freqCtr1.get(s[i]) || 0)+1);
        }

        for(let j=0; j < t.length; j++){
            freqCtr2.set(t[j], (freqCtr2.get(t[j])  || 0)+1);
        }

        for(let [key, val] of freqCtr1){
            if(!freqCtr2.has(key)) return false;
            if(val !== freqCtr2.get(key)) return false;
        }

        return true;
    
    }
}

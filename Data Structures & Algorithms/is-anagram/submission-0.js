class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let frequencyCtr = {};
        let frequencyCtr2 = {};

        for(let char of s){
            frequencyCtr[char] = (frequencyCtr[char] || 0)+1
        }

        for(let letter of t){
            frequencyCtr2[letter] = (frequencyCtr2[letter] || 0)+1
        }


        for(let item in frequencyCtr){
            if(frequencyCtr2[item] == undefined || frequencyCtr2[item] == null){
                return false;
            }

            if(frequencyCtr2[item] !== frequencyCtr[item]) return false;
        }

        return true;
    }
}

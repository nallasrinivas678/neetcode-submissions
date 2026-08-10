class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let n1 = s1.length;
        let n2 = s2.length;

        if(n1 > n2) return false;

        let s1count = new Uint32Array(26);
        let s2count = new Uint32Array(26);
        const acode = 97;

        //fill 26 chars array with frequency for s1 and s2 till length of s1
        for(let i=0; i < n1; i++)
        {
            s1count[s1.charCodeAt(i) - acode]++;
            s2count[s2.charCodeAt(i) - acode]++;
        }

        const isMatch = (arr1, arr2) => {
            for(let i=0; i < 26; i++){
                if(arr1[i] !== arr2[i]) return false;
            }
            return true;
        }

        if(isMatch(s1count, s2count)) return true;

        for(let i=n1; i < n2; i++){
            s2count[s2.charCodeAt(i) - acode]++;
            s2count[s2.charCodeAt(i-n1) - acode]--;

            if(isMatch(s1count, s2count)) return true;
        }

        return false;
    }
}

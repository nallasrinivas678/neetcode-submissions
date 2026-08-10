class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freq1 = new Map();
        let windowFreq = new Map();

        if(s1.length > s2.length) return false;

        for(let char of s1){
            freq1.set(char, (freq1.get(char) || 0 )+1);
        }

        let left = 0
        for(let right =0; right < s2.length; right++){
            let char = s2[right];
            windowFreq.set(char, (windowFreq.get(char) || 0)+1 );

            //shrink window
            while(right -left +1 > s1.length){
                let leftChar = s2[left];
                windowFreq.set(leftChar, windowFreq.get(leftChar)-1)

                if(windowFreq.get(leftChar) === 0){
                    windowFreq.delete(leftChar);
                }
                left++;
            }

            const matches = (freq1, freq2) => {
                for(let [key, value] of freq1){
                    if(!freq2.has(key)) return false;
                    if(value !== freq2.get(key)) return false;
                }
                return true;
            }

            if(matches(freq1, windowFreq)) return true;

        }
        return false;
    }
 
}


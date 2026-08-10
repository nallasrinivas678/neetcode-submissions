class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        if(s.length <=1 ) return s;
        let resIdx = 0;
        let resLen = 0;

       for(let i=0; i < s.length; i++){
        let l =i;
        let r =i;
        //odd length
        //left and right pointers inbound and values should be same 
        while( l >= 0 && r < s.length && s[l] === s[r]){
            if(r-l+1 > resLen){
                resIdx = l;
                resLen = r-l+1;
            }
            l--;
            r++;
        }

        //even length
        l =i;
        r =i+1;
        while( l >= 0 && r < s.length && s[l] === s[r]){
            if(r-l+1 > resLen){
                resIdx = l;
                resLen = r-l+1;
            }
            l--;
            r++;
        }
       }
    return s.substring(resIdx, resIdx+resLen);
    }
}

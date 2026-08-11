class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;

        while(left < right){
            while(left < right && !isAlphaNumberic(s[left])) left++;
            while(left < right && !isAlphaNumberic(s[right])) right--;
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            else {
                left++;
                right--;
            }
        }
        return true;
    }

}


    function isAlphaNumberic(c){
        return (c >= 'A' && c <= 'Z') ||
        (c >= 'a' && c <= 'z') ||
        (c >= '0' && c <= '9')
    }

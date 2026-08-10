class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        while(left < right){
            if(left < right && !this.isAlphaNumeric(s[left])){
                left++;
                continue;
            }
            if(right > left && !this.isAlphaNumeric(s[right])){
                right --;
                continue;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            } 
            left++;
            right--;
        }
        return true;
    }

    isAlphaNumeric(char){
        return (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9');
    }
}

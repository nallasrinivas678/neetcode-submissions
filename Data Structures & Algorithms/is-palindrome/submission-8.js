class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length === 0) return true;
        let lp =0;
        let rp = s.length - 1;

        while(lp < rp){
            let leftAlphanumeric = this.isAlphanumeric(s[lp]);
            let rightAlphanumeric =  this.isAlphanumeric(s[rp]);

            if(!leftAlphanumeric) lp++;
            if(!rightAlphanumeric) rp--;
            
            if(this.isAlphanumeric(s[lp]) && this.isAlphanumeric(s[rp]) &&
            s[lp].toLowerCase() === s[rp].toLowerCase())
            {
                lp++;
                rp--;
            }

            if(this.isAlphanumeric(s[lp]) && this.isAlphanumeric(s[rp]) &&
            s[lp].toLowerCase() !== s[rp].toLowerCase())
            {
                return false;
            }
        }
        return true;
    }

    isAlphanumeric(char){
        if(char >= 'a' && char <= 'z') return true;
        if(char >= 'A' && char <= 'Z') return true;
        if(char >= '0' && char <= '9') return true;
        return false;
    }
}

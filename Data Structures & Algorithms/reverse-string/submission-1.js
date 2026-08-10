class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0
        let right = s.length-1;

        while(left < right){
            let tempright = s[right];
            let templeft = s[left];
            s[right] = templeft;
            s[left] = tempright;
            left++;
            right--;
        }

        return s;
    }
}

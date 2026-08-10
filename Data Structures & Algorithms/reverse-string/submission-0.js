class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length -1;

        while(left < right){
            let temp = s[left];
            let tempr = s[right];
            s[left] = tempr;
            s[right] = temp;
            left++;
            right--;
        }
        return s;
    }
}

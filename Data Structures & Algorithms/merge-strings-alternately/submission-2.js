class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let p1 = 0;
        let p2 = 0;
        let result = [];

        while(p1 <= word1.length-1 && p2 <= word2.length-1){
           result.push(word1[p1]);
           result.push(word2[p2]);
           p1++;
           p2++;
        }

        while(p1 <= word1.length-1){
            result.push(word1[p1]);
            p1++;
        }

        while(p2 <= word2.length-1){
            result.push(word2[p2]);
            p2++;
        }

        return result.join('');
    }
}

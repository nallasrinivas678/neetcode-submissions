class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {};

        for(let str of strs){
            let alphabets = new Array(26).fill(0);
            for(let i =0; i < str.length; i++){
                let char = str[i];
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                alphabets[index] = (alphabets[index] || 0)+1;
            }
            let key = alphabets.join(",");
            console.log(key);
            if(!result[key]){
                result[key] = []
            }
            result[key].push(str)
        }

        return Object.values(result);

    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let delimiter = "#";
        let result = "";
        for(let str of strs){
            result += str.length + delimiter + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            //find #
            while(str[j] !== "#") j++;
            let len = parseInt(str.slice(i,j), 10);
            j++; //skip # delimiter
            result.push(str.slice(j, j+len)); //to get actual word
            i = j+len; //we need to start again for next word
        }
        return result;
    }
}

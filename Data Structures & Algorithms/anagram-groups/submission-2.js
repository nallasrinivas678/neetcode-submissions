class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //use bucket sort algor
        const map = new Map();
        
        for(let str of strs)
        {
            let arr = new Array(26).fill(0);

            for(let char of str)
            {
                let key = char.charCodeAt(0) - 'a'.charCodeAt(0);
                arr[key] = (arr[key] || 0 )+1
            }
            let finalkey = arr.join(",");  //1,0,1,0,

            if(!map.has(finalkey)){
                map.set(finalkey, []);
            }
            map.get(finalkey).push(str);  //[act, cat]
        }

        return Array.from(map.values());
    }
}

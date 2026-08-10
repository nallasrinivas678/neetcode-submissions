class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let map = {')':'(', '}':'{', ']':'['};

        for(let c of s){
            if(c === '(' || c === '{' || c=== '['){
                stack.push(c);
            }
            else{
                if(stack.length === 0) return false;
                let lastItem = stack.pop();
                if(map[c] !== lastItem) return false;
            }
           
        }

        return stack.length === 0;
    }
}

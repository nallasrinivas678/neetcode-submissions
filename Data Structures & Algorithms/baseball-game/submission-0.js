class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let finalScore = 0;
        let stack = [];

        //[5,D,+,C]
        for(const op of operations){
            if(op === '+'){
                const newScore = stack[stack.length-1]+stack[stack.length-2];
                stack.push(newScore);
            }
            else if(op === 'D'){
                const newScore = stack[stack.length-1] * 2;
                stack.push(newScore);

            }
            else if(op === 'C'){
                stack.pop();
            }
            else {
                stack.push(parseInt(op));
            }
        }

        let res = 0;
        for(let num of stack){
            res += num;
        }

        return res;
        
    }
}

class Solution {
    /**
     * @param {NestedInteger[]} nestedList
     * @return {number}
     */
    depthSum(nestedList) {
        let stack = [];
        let sum = 0;

        for(let item of nestedList){
            stack.push([item, 1]);
        }

        while(stack.length > 0){
            let [current, depth] = stack.pop();
            
            if(!current.isInteger()){
                for(let child of current.getList()){
                    stack.push([child, depth + 1])
                }
            }
            else{
                sum += current.getInteger() * depth;
            }
        }

        return sum;

    }
}
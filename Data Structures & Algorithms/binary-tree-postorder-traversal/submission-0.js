/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        if(!root) return [];
        const stack = [];
        const result = [];
        let curr = root;
        let lastVisited = null;

        while(curr  || stack.length > 0){
            if(curr){  //traverse to bottom left node
                stack.push(curr);
                curr = curr.left;
            }
            else{
                let peekNode = stack[stack.length -1];
                //if right child exists and we haven't visited it yet
                if(peekNode.right && peekNode.right !== lastVisited){
                    curr = peekNode.right;
                }
                else{
                    //process node either no right child or already visited
                    result.push(peekNode.val);
                    lastVisited = stack.pop();
                }
            }
        }
        return result;
    }
}

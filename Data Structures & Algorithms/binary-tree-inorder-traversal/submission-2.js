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
    inorderTraversal(root) {
        if(!root) return [];
        let result = [];
        let stack = [];
        let current = root;

        while(current || stack.length > 0){
            //go to bottom left to leaf node
            while(current){
                stack.push(current);
                current = current.left; 
            }
            current = stack.pop();
            result.push(current.val);
            current = current.right
        }

        return result;

    }
}

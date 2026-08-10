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
    //Idea is to use same modified preorder traversal and reverse the result at the end.
    //pre order: root -> left -> right
    //modified pre order: root-> right-> left
    //post order (reverse modified pre order): left-> right -> root
        if(!root) return [];
        let stack = [root];
        let result = [];

        while(stack.length > 0){
            let node = stack.pop();
            result.push(node.val);

            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        return result.reverse();
    }
}

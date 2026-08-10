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
     * @return {number}
     */
    maxDepth(root) {
        let maxDepth = 0;
        let stack = [[root, 1]];

        while(stack.length > 0){
            let current = stack.pop();
            let node = current[0];
            let depth = current[1];

            if(node != null){
                maxDepth = Math.max(depth, maxDepth);
                stack.push([node.right, depth+1]);
                stack.push([node.left, depth+1]);
            }
        }

        return maxDepth;
    }
}

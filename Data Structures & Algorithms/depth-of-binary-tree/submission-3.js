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
        if(!root) return 0;
        //root node is at depth:1
        //1 level below root node , children are at depth:2, so from top to bottom depth increase
        //so we can store node and its depth in array. 
        //use DFS iterative with stack and increment depth at each level
        let stack = [[root,1]];
        let maxDepthFound = 0;
        while(stack.length > 0){
            let [node, depth] = stack.pop();
            maxDepthFound = Math.max(depth, maxDepthFound);
            if(node.right) stack.push([node.right, depth+1]);
            if(node.left) stack.push([node.left, depth+1]);
        }
        return maxDepthFound;
    }
}

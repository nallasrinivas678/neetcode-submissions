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
     * @return {number[][]}
     */
    findLeaves(root) {
        const result = [];

        const dfs = (node) => {

            //base case null nodes have height -1
            if(!node) return -1;

            //travers left and right nodes (post order)
            let leftHeight = dfs(node.left);
            let rightHeight = dfs(node.right);

            let currentHeight = Math.max(leftHeight, rightHeight)+1;

            //add node to corresponding height level if it doesnt exists
            if(result.length === currentHeight){
                result.push([]);
            }
            result[currentHeight].push(node.val);

            return currentHeight;
        }
        dfs(root);
        return result;

    }
}

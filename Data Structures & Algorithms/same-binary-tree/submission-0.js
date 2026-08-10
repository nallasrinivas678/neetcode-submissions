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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        let stack = [[p, q]];

        while(stack.length > 0){
            let current = stack.pop();
            let node1 = current[0];
            let node2 = current[1];

            if(node1 === null && node2 === null) continue;

            if(node1 === null || node2 == null) return false;

            if(node1.val !== node2.val) return false;

            stack.push([node1.right, node2.right]);
            stack.push([node1.left, node2.left]);
        }

        return true;

    }
}

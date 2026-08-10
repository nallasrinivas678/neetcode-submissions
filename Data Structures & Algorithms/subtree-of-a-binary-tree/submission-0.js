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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        if(!subRoot) return true;

        if(!root) return false;

        let stack = [root];

        while(stack.length > 0){
            let current = stack.pop();

            //check if trees are same here
            if(current.val === subRoot.val && this.isSameTree(current, subRoot)){
                return true;
            }

            if(current.right) stack.push(current.right);
            if(current.left) stack.push(current.left);
        }
        
        return false;
    }

    isSameTree(p, q){
        let stack = [[p,q]];

        while(stack.length > 0){
            let current = stack.pop();
            let node1 = current[0];
            let node2 = current[1];

            if(node1 === null && node2 === null) continue;

            if(node1 === null || node2 === null) return false;

            if(node1.val !== node2.val) return false;

            stack.push([node1.right, node2.right]);
            stack.push([node1.left, node2.left]);

        }

        return true;
    }
}

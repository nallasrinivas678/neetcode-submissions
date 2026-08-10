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
        if(root === null) return [];
        const values = [];
        const stack = [];
        let curr = root
        //[1]
        //[2]
        //[4]
        while(curr || stack.length > 0){
            
            //to reach bottom left node
            while(curr != null){
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            values.push(curr.val);
            curr = curr.right
        }

        return values;

    }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //idea is to use two pointers approach with left and right
        //gap b/w left and right should be n, if right reaches end of list which is null 
        //then it means left pointer reaches the node to remove
        let dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        //to reach right pointer to distance n from left
        while(n > 0){
            right = right.next;
            n--;
        }

        while(right != null){
            left = left.next;
            right = right.next;
        }

        //delete
        left.next = left.next.next;
        return dummy.next;

    }
}

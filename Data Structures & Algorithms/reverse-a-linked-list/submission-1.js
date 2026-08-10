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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let next = null;
        let curr = head;
        // prev -> head-> n1 -> n2-> n3-> tail
        while(curr != null){
            next = curr.next;
            curr.next = prev; //to chaneg pointer direction

            //to move pointers
            prev = curr;
            curr = next;
        }
        return prev;
    }
}

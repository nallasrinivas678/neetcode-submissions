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
     * @return {boolean}
     */
    hasCycle(head) {
        //core logic: we can use slow and fast pointers.
        //if fast pointer meets slow one, then it means we have cycle in our list
        if (!head || !head.next) return false;
        let slow = head;
        let fast = head.next;

        while(slow != null && fast != null){
            if(slow === fast) return true;
            else{
                slow = slow.next;
                if(fast.next) fast = fast.next.next;
                else fast = null;
            }
        }

        return false;
    }
}

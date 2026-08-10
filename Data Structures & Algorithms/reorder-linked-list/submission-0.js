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
     * @return {void}
     */
    reorderList(head) {
        //find mid point
        let slow = head;
        let fast = head.next;

        //1 -> 2 -> 3-> 4 -> 5
        //      s       f

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        let prev = (slow.next = null);

        //reverse second half
        while(second != null){
            const tmp = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        let first = head;
        second = prev;

        //to merge list
        while(second != null){
            const tmp1 = first.next;
            const tmp2 = second.next;

            //set links for alternating
            first.next = second;
            second.next = tmp1;

            //move pointers
            first = tmp1;
            second = tmp2;
        }


    }
}

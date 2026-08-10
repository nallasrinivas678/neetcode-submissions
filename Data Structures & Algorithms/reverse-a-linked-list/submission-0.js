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

        //we need three variables to store dummy node as prev which is null initially
       let prev = null;
       let curr = head;
       let next = null;

       while(curr !== null){
        next = curr.next; //to store next before setting direction of main node to prev
        curr.next = prev;
        prev = curr; //to start move to next node 
        curr = next;// to progress
       }

       return prev; //this is new head node
    }
}

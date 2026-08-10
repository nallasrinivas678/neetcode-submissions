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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;
        let carry = 0;

        while(l1 || l2 || carry){
            let v1 = l1 ? l1.val : 0;
            let v2 = l2 ? l2.val : 0;

            let sum = v1+v2+carry;
            carry = Math.floor(sum/10); //to get carry divide by 10
            let nodeValue = sum % 10 //to get val without carry since we need to store single digit val in node
            curr.next = new ListNode(nodeValue);
            
            curr = curr.next;
            l1 = l1? l1.next : null;
            l2 = l2? l2.next: null;
        }

        return dummy.next;
    }
}

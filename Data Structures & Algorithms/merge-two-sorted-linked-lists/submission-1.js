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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1;
        let curr2 = list2;
        let dummyNode = new ListNode(-1);
        let tail = dummyNode;

        while(curr1 && curr2){

            if(curr2.val >= curr1.val){
                tail.next = curr1;
                curr1 = curr1.next;
            }
            else{
                tail.next = curr2;
                curr2 = curr2.next;
            }
            tail = tail.next;
        }

        if(curr1){
            tail.next = curr1;
        }
        if(curr2){
            tail.next = curr2;
        }
        return dummyNode.next;
    }
}

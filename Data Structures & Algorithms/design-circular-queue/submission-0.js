class ListNode {
    constructor(val, next = null, prev = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.space = k;
        this.left = new ListNode(0);
        this.right = new ListNode(0, null, this.left);
        this.left.next = this.right;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()) return false;
        let curr = new ListNode(value, this.right, this.right.prev);
        this.right.prev.next = curr;  //assign left node next pointer to new node
        this.right.prev = curr; //assign right node prev pointer to new node
        this.space--;
        return true;

    }

    /**
     * @return {boolean}
     */
    deQueue() {
        //idea is to remove from left side (front of the queue FIFO)
        if(this.isEmpty()) return false;
        this.left.next = this.left.next.next; //skip one node 
        this.left.next.prev = this.left;
        this.space++;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if(this.isEmpty()){
            return -1;
        }
        return this.left.next.val; //first val after left dummy node
    }

    /**
     * @return {number}
     */
    Rear() {
        if(this.isEmpty()) return -1;
        return this.right.prev.val; //;first val before right dummy node
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.left.next === this.right; //if there are no values b/w left and right dummy nodes
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.space === 0;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

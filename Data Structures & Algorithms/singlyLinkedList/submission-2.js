class ListNode{
    constructor(val, nextNode = null){
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i=0;
        let curr = this.head.next; //actual node starts from head.next since head is dummy

        while(curr){
            if(index === i) return curr.val;
            i++;
            curr = curr.next
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next; //we will keep dummy node as head
        this.head.next = newNode;
        if(!newNode.next){
            //if list was empty before insertion or if newNode next is null then it's the tail
            this.tail = newNode;
        }

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new ListNode(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i=0;
        let curr = this.head;
        //idea is to find node before actual node
        while(i < index && curr){
            i++;
            curr = curr.next;
        }

        //remove the node ahead of curr
        if(curr && curr.next){
            if(curr.next === this.tail) this.tail = curr;
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let result = [];
        let curr = this.head.next;
        while(curr){
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }
}

class Node{
    constructor(key,val){
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) return -1;

        //before return val we should move this recent use val next to head
        const node = this.map.get(key);
        this.remove(node)
        this.insertAtHead(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        //if exists remove from map we gonna add it back
        if(this.map.has(key)){
            this.remove(this.map.get(key))
        }

        const newNode = new Node(key, value);
        this.insertAtHead(newNode);
        this.map.set(key, newNode);

        //if cache size exceeds than capacity, delete LRU
        if(this.map.size > this.capacity){
            const node = this.tail.prev;
            this.remove(node);
            this.map.delete(node.key);
        }
    }

    insertAtHead(node){
        //set curr node prev and next pointers around head
        node.next = this.head.next;
        node.prev = this.head;

        //point head pointers to new node
        this.head.next.prev = node;
        this.head.next = node;

    }

    //head -> node1 -> tail
    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
}

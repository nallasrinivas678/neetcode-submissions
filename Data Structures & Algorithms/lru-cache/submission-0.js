class Node{
    constructor(key,value){
        this.key = key;
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

//[HEAD*] <-> [MRU] <-> [node] <-> [node] <-> [LRU] <-> [TAIL*]
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0,0);
        this.tail = new Node(0,0);

        //connect head with tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        //make this node as most recent use
        this.remove(node);
        this.insertAtHead(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        //if exists in cache remove from list, we gonna add it back after head
        if(this.cache.has(key)){
            this.remove(this.cache.get(key));
        }

        const newNode = new Node(key, value);
        this.insertAtHead(newNode);
        this.cache.set(key, newNode);

        //if cache size exceeds than capacity, delete LRU node
        if(this.cache.size > this.capacity){
            const lru = this.tail.prev;
            this.remove(lru);
            this.cache.delete(lru.key);
        }

    }

    //a - b- c  : in order to remove b node. we need to point a to c
    //here param node is b.
    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // insert node right after head
    insertAtHead(node){
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;

    }
}

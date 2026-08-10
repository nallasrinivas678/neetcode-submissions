class Node 
{
    constructor(key, value)
    {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) 
    {
        this.cache = new Map();
        this.capacity = capacity;
        this.head = new Node(0,0) //dummy head
        this.tail = new Node(0,0) //dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) return -1;

        let node = this.cache.get(key);

        //remove node first since we will insert at head as most recent used
        this.remove(node);

        //insert node
        this.insertAtHead(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        //if exists remove node and re-insert at head
        if(this.cache.has(key)){
            let node = this.cache.get(key);
            node.value = value;
            this.remove(node);
            this.insertAtHead(node);
            return;
        }

        let newNode = new Node(key, value);
        this.insertAtHead(newNode);
        this.cache.set(key, newNode);

        //if cache size exceeds than capacity
        if(this.cache.size > this.capacity){
            let node = this.tail.prev;
            this.remove(node);
            this.cache.delete(node.key);
        }


    }

    remove(node){
        //n2
        //head -> n1 -> n2 - > tail
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insertAtHead(node){
        //head -> n1 -> tail
      //set curr node prev and next pointers around head
      node.next = this.head.next;
      node.prev = this.head;

      //update head pointers to new node
      this.head.next.prev = node;
      this.head.next = node;

    }
}

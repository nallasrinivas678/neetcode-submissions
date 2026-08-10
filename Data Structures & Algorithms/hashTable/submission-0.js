class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashTable {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(this.capacity).fill(null);
    }

    hashFunction(key){
        return key % this.capacity;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    insert(key, value) {
        const index = this.hashFunction(key);
        let node = this.table[index]


        //if node doesnt exists add it
        if(!node){
            this.table[index] = new Node(key, value);
            this.size++;
        }
        else{
            let prev = null;
            while(node){         
                if(node.key === key){  //if key already exists update
                    node.value = value;
                    return;
                }
                prev = node;
                node = node.next;
            }
            prev.next = new Node(key, value);
            this.size++;
        }

        if(this.size / this.capacity >= 0.5){
            this.resize();
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        const index = this.hashFunction(key);

        let node = this.table[index];

        while(node){
            if(node.key === key){
                return node.value;
            }
            node = node.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    remove(key) {
        const index = this.hashFunction(key);
        let node = this.table[index];
        let prev = null;

        while(node){
            if(node.key === key){
                if(prev){
                    prev.next = node.next;
                }
                else{
                    this.table[index] = node.next;
                }
                this.size--;
                return true;
            }
            prev = node;
            node = node.next;
        }

        return false;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

    /**
     * @return {void}
     */
    resize() {
        const newCapacity = this.capacity * 2;
        const newTable = new Array(newCapacity).fill(null);

        for(let node of this.table){
            while(node){
                const index = node.key % newCapacity;
                //if no element exists, add it
                if(newTable[index] === null){
                    newTable[index] = new Node(node.key, node.value);
                }
                else{
                    let newNode = newTable[index]; //if an element exists at that index find next node and add it to that as node.next
                    while(newNode){
                        newNode = newNode.next;
                    }
                    newNode.next = new Node(node.key, node.value);
                }
                node = node.next;
            }
        }

        this.capacity = newCapacity;
        this.table = newTable;
    }
}

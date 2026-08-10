class RandomizedSet {
    constructor() {
        this.numMap = new Map();  //actual val will be stored as key. value of the map is index of array
        this.nums = [];
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if(this.numMap.has(val)) return false;
        this.numMap.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        //idea is to get index of val to remove first
        //pop last ele from array and set it in index for which we need to remove
        if(!this.numMap.has(val)) return false;
        const idx = this.numMap.get(val);
        const last = this.nums[this.nums.length-1];
        this.nums[idx] = last;
        this.numMap.set(last, idx);
        this.nums.pop();
        this.numMap.delete(val);
        return true;

    }

    /**
     * @return {number}
     */
    getRandom() {
        return this.nums[Math.floor(Math.random()*this.nums.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

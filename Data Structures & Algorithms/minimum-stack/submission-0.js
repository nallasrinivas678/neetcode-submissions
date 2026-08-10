class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        let minStackVal = Math.min(val,
        this.minStack.length === 0 ? val : this.minStack[this.minStack.length- 1] );
        this.minStack.push(minStackVal);
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

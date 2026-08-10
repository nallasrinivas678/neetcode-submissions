class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack= [];
        for(const str of tokens)
        {
            console.log(str);
            if(str === '+' || str === '-' || str === '*' || str === '/')
            {
                let result;
                const b = stack.pop();
                const a = stack.pop();
                switch(str)
                {
                    case '+':
                        result = a+b;
                        break;
                    case '-':
                        result = a-b;
                        break;
                    case '*':
                        result = a*b;
                        break;
                    case '/':
                        result = Math.trunc(a/b);
                        break;
                }
                stack.push(result);
            }
        else{
            stack.push(parseInt(str));
        }
    }
        return stack.pop();
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        s = s.trim();
        let num = 0;
        let sign = '+';
        let stack = [];
        for(let i=0; i < s.length; i++){
            let ch = s[i];
            if(isDigit(ch)){
                num = num * 10 + (ch - '0');
            }
            //if operator or end of string process
            if ((!isDigit(ch) && ch !== ' ') || i === s.length - 1) {
                if (sign === '+') stack.push(num);
                else if (sign === '-') stack.push(-num);
                else if (sign === '*') stack.push(stack.pop() * num);
                else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
                sign = ch;
                num = 0;
            } 
        }
        return stack.reduce((a, b) => a + b, 0);
    }
}
const isDigit = (ch) => {
    return (ch >= '0' && ch <= '9');
}

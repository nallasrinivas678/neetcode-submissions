class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
    //x = 4
    //[1,23,4,5,6,7,8,9,10,11,12,13,14,15,16]
    let l =0;
    let r = x;
    let res = 0;

    while(l <=r){
        let mid = Math.floor((l+r)/2);

        if(mid*mid === x) return mid;
        else if(mid * mid <= x){
            res = mid;
            l = mid+1;
        }
        else {
            r = mid-1;
        }
    }
    return res;
}
    
}

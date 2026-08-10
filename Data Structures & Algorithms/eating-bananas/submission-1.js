class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l =0; 
        let r= Math.max(...piles);
        let res = r;

        while(l <=r){
            let k = Math.floor((l+r)/2);

            let totalTime = 0;
            for(const p of piles){
                totalTime += Math.ceil(p/k);
            }

            if(totalTime <= h){
                r = k-1;
                res = Math.min(res, k);
            }
            else l = k+1;
        }
        return res;
    }
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // 1. Define the search space for the ANSWER (speed k)
        let l =0;
        let r = Math.max(...piles);
        let result = r;

        while(l <= r){
             //calculates hours for one pile
            let mid = Math.floor((l+r)/2);
            if(this.canFinish(mid, h, piles)){
                result = mid;  // Speed 'mid' works! But can we go even slower?
                r = mid-1; //try to find better rate
            }
            else l = mid+1; 
        }

        return result;
    }

    canFinish(k, h, piles){
            let totalTime = 0;
            for(const p of piles){
                totalTime += Math.ceil(p/k);
            }
            return totalTime <= h; //does this speed meet the deadline
    }

}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l =0;
        let r = Math.max(...piles);
        let result = -1;

        while(l <= r){
            let mid = Math.floor((l+r)/2);
            if(this.canFinish(mid, h, piles)){
                result = mid;
                r = mid-1;
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
            return totalTime <= h;
    }

}

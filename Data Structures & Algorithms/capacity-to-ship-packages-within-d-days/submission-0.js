class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = 0;
        for(const weight of weights){
            right += weight;
        }
        let res = right;
        //[10,26]

        const canShip = (cap) => {
            let ships = 1;
            let currCap = cap;
            for(const w of weights){
                //we need to check if current weight can be within the given capacity, if its not then add another ship
                //since we add another ship, reset currentCap to given cap
                if(currCap - w < 0){
                    ships++;
                    if(ships > days) return false;
                    currCap = cap;
                }
                currCap = currCap - w;
            }
            return ships <= days;
        }

        while(left <= right ){
            let cap = Math.floor((left+right)/2);

            if(canShip(cap)){
                res = Math.min(cap, res);
                right = cap -1;
            }
            else left = cap+1
        }
        return res;
    }
}

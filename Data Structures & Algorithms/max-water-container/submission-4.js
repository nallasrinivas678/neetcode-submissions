class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxarea = 0;
        let lp = 0;
        let rp = heights.length - 1;

        while(lp < rp){
            let leftbarHeight = heights[lp];
            let rightbarHeight = heights[rp];
            let currentArea = Math.min(rightbarHeight,leftbarHeight) * (rp - lp);
            maxarea = Math.max(currentArea, maxarea);
            
            //move low height bar right to get max area
            if(leftbarHeight < rightbarHeight){
                lp++;
            }
            else if(leftbarHeight > rightbarHeight){
                rp--;
            }
            else{
                lp++;
            }
        }
        return maxarea;
    }
}

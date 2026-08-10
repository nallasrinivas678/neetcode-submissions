class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let maxArea = 0;

        while(left < right){
            let currentArea = calArea(heights[left], heights[right], right, left);
            maxArea = Math.max(currentArea, maxArea);
            if(heights[left] < heights[right]){
                left++;
            }
            else right--;
        }

        return maxArea;


        function calArea(bar1Height, bar2Height, right, left){
            let width = right - left;
            let minHeight = Math.min(bar1Height, bar2Height);
            return minHeight * width
        }
    }
}

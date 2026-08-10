class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let leftHeight = heights[left];
            let rightHeight = heights[right];
            let minH = Math.min(rightHeight, leftHeight);

            //area formula = width b/w bars multiply by min height of the bars
            let currentArea = (right - left) * minH; 

            maxArea = Math.max(currentArea, maxArea)

            //move low height bar to get max area
            if(leftHeight < rightHeight){
                left++;
            }
            else if(leftHeight > rightHeight){
                right--;
            }
            else {
                left++;
            }
        }
        return maxArea;

    }
}

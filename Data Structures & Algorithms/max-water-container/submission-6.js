class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //idea is to calcultae max area b/w each heights
        //we can use two pointer approach
        let left = 0;
        let right = heights.length-1;
        let maxArea = 0;

        while(left < right){

            if(heights[left] < heights[right]){
                let currentArea = calArea(left, right, heights);
                maxArea = Math.max(maxArea, currentArea)
                left++;
            }
            else {
                let currentArea = calArea(left, right, heights);
                maxArea = Math.max(maxArea, currentArea)
                right--;
            }
        }

        return maxArea;
    }

}

    
     function calArea(leftIndex, rightIndex, heights){
            return Math.min(heights[leftIndex], heights[rightIndex]) * (rightIndex-leftIndex);
        }

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
        let area = 0;

        while(left < right){
            let currentArea = calArea(left, right, heights);
            area = Math.max(area, currentArea)
        
        //core logic to move left/right pointers in order to get max area we need to move pointer which has less height since height with max pointer helps to get max area
            if(heights[left] <= heights[right]){
                left++;
            }
            else {
                right--;
            }
        }

        return area;
    }

}

    
     function calArea(leftIndex, rightIndex, heights){
            return Math.min(heights[leftIndex], heights[rightIndex]) * (rightIndex-leftIndex);
        }

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        // PHASE 1: Find the intersection point within the cycle
        // We move the slow pointer 1 step and the fast pointer 2 steps
        // at a time until they meet.
        do{
            slow = nums[slow];
            fast = nums[nums[fast]]
        }while(slow != fast)

        // PHASE 2: Find the entrance to the cycle (the duplicate number)
        // Keep 'fast' at the intersection point and reset 'slow' to the start.
        // Move both 1 step at a time; they are mathematically guaranteed 
        // to meet at the entrance.
        slow = nums[0];
        while (slow !== fast) {
            slow = nums[slow];           // 1 step
            fast = nums[fast];           // 1 step
        }

        //the meeting point is duplicate number
        return slow;

    }
}

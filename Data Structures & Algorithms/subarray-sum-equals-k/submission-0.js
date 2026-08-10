class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
    const prefixSums = [0];
  let total =0;
  for(let num of nums){
    total += num;
    prefixSums.push(total);
  }

  const seen = {};
  let count = 0;
  for(let current of prefixSums){
    const complement = current - k;

    if(complement in seen){
      count += seen[complement];
    }

    seen[current] = (seen[current] || 0) +1
  }

  return count;

    }
}

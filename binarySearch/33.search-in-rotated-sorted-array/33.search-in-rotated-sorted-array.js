/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return target === nums[0] ? 0 : -1;
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[0]) {
    // [0, mid] 为单调递增
      if (target < nums[mid] && target >= nums[0]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
    // [mid, lenght - 1] 为单调递增
      if (target > nums[mid] && target <= nums[nums.length-1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end


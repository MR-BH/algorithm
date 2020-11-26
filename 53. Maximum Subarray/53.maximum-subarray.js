/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 * 
 * method1: 基于滑动窗口思想的DP解法
 * method2: 基于线段树思路的解法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// method 1
var maxSubArray = function(nums) {
    let max = sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      sum = Math.max(sum + nums[i], nums[i]);
      max = Math.max(sum, max);
    }
    return max;
};

// method 2
// 对于[l, r]
function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}

function getInfo(nums, l, r) {
  if (l === r) return new Status(nums[l], nums[l], nums[l], nums[l]);
  const mid = Math.floor((l + r) / 2);
  const left = getInfo(nums, l, mid);
  const right = getInfo(nums, mid + 1, r);
  return pushUp(left, right);
}

function pushUp(left, right) {
  const lSum = Math.max(left.lSum, left.iSum + right.lSum);
  const rSum = Math.max(right.rSum, right.iSum + left.rSum);
  const mSum = Math.max(left.mSum, right.mSum, left.rSum + right.lSum);
  const iSum = left.iSum + right.iSum;
  return new Status(lSum, rSum, mSum, iSum);
}

var maxSubArray = function(nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};
// @lc code=end


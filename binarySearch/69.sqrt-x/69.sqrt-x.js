/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = x, ans = -1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (mid * mid <= x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mySqrt;
// @after-stub-for-debug-end
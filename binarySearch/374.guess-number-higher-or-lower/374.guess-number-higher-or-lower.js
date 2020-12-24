/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      const ans = guess(mid);
      if (ans === 0) {
        return mid;
      } else if (ans === 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
};
// @lc code=end


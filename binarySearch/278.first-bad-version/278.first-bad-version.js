/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0, right = n;
        while (left < right) {
          const mid = right - ((right - left) >> 1);
          if (isBadVersion(mid)) {
            if (mid === 1 || !isBadVersion(mid - 1)) {
              return mid;
            } else {
              right = mid - 1;
            }
          } else {
            left = mid;
          }
        }
        if (left != 0 && isBadVersion(left)) return left;
        return -1;
    };
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = solution;
// @after-stub-for-debug-end
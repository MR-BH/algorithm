/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const trees = [];
  return findDuplicateSubtreesImpl(root, trees);
};

var findDuplicateSubtreesImpl = function(root, trees) {
  if (root === null) return;
  findDuplicateSubtreesImpl(root.left, trees);
  findDuplicateSubtreesImpl(root.right, trees);
}
// @lc code=end


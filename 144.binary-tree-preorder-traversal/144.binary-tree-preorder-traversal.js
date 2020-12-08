/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
// recursive
var preorderTraversal = function (root) {
  const nums = [];
  preorderTravvelsalUtil(root, nums);
  return nums;
};

var preorderTravvelsalUtil = function (root, nums) {
  if (root == null) return;
  nums.push(root.val);
  preorderTravvelsalUtil(root.left, nums);
  preorderTravvelsalUtil(root.right, nums);
}

// iterative
var preorderTraversal = function (root) {
  const nums = [];
  if (root == null) return nums;
  const stack = [];
  let tree = root;
  while (tree != null || stack.length > 0) {
    while (tree != null) {
      // 前
      nums.push(tree.val);
      stack.push(tree);
      tree = tree.left;
    }
    tree = stack.pop();
    tree = tree.right;
  }
  return nums;
};

// morris
var preorderTraversal = function (root) {
  const nums = [];
  if (root == null) return nums;
  let cur = root, precursor = null;
  while (cur != null) {
    precursor = cur.left;
    if (precursor != null) {
      while (precursor.right != null && precursor.right != cur) {
        precursor = precursor.right;
      }
      if (precursor.right == null) {
        // all root node
        nums.push(cur.val);
        precursor.right = cur;
        cur = cur.left;
        continue;
      } else {
        precursor.right = null;
      }
    } else {
      // all leaf node
      nums.push(cur.val);
    }
    cur = cur.right;
  }
  return nums;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = preorderTraversal;
// @after-stub-for-debug-end
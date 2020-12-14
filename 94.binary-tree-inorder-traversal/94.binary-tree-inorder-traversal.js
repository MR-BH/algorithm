/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function (root) {
  const nums = [];
  inorder(root, nums);
  return nums;
};

var inorder = function (root, nums) {
  if (root == null) return null;
  inorder(root.left, nums);
  nums.push(root.val);
  inorder(root.right, nums);
}

// iterative
var inorderTraversal = function (root) {
  const nums = [];
  if (root == null) return nums;
  const stack = [];
  let tree = root;
  while (tree != null || stack.length > 0) {
    while (tree != null) {
      stack.push(tree);
      tree = tree.left;
    }
    tree = stack.pop();
    // inorder
    nums.push(tree.val);
    tree = tree.right;
  }
  return nums;
}

var inorderTraversal = function (root) {
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
        precursor.right = cur;
        cur = cur.left;
        continue;
      } 
      precursor.right = null;
    }
    nums.push(cur.val);
    cur = cur.right;
  }
  return nums;
}

// @lc code=end


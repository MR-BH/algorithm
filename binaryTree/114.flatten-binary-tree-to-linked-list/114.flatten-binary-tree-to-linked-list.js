/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root == null) return;

  let left = root.left;
  const right = root.right;

  flatten(left);
  flatten(right);

  root.left = null;
  root.right = left;

  let p = root;
  while (p.right != null) {
    p = p.right;
  }
  p.right = right;
};


var flatten = function (root) {
  if (root == null) return;
  const stack = [ root ];
  let prev = null;
  while (stack.length > 0) {
    const cur = stack.pop();
    if (prev != null) {
      prev.right = cur;
      prev.left = null;
    }
    if (cur.right != null) stack.push(cur.right);
    if (cur.left != null) stack.push(cur.left);
    prev = cur;
  }
};

var flatten = function (root) {
  if (root == null) return;
  let cur = root, precursor = null;
  while (cur != null) {
    precursor = cur.left;
    if (precursor != null) {
      while (precursor.right != null) {
        precursor = precursor.right;
      }
      precursor.right = cur.right;
      cur.right = cur.left;
      cur.left = null;
    }
    cur = cur.right
  }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = flatten;
// @after-stub-for-debug-end
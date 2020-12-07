/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */

// recursive preOrder and postOrder both work
// var invertTree = function(root) {
//     if (root == null) return null;
//     const tmp = root.left;
//     root.left = root.right;
//     root.right = tmp;
//     invertTree(root.left);
//     invertTree(root.right);
//     return root;
// };

// iterative BFS base Queue
// var invertTree = function(root) {
//   if (root == null) return null;
//   const queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     const element = queue.shift();
//     const tmp = element.left;
//     element.left = element.right;
//     element.right = tmp;
//     if (element.left != null) queue.push(element.left);
//     if (element.right != null) queue.push(element.right);
//   }
//   return root;
// };

// iterative DFS base Stack
// var invertTree = function(root) {
//   if (root == null) return null;
//   const stack = [];
//   stack.push(root);
//   while (stack.length > 0) {
//     const element = stack.pop();
//     const tmp = element.left;
//     element.left = element.right;
//     element.right = tmp;
//     if (element.right != null) stack.push(element.right);
//     if (element.left != null) stack.push(element.left);
//   }
//   return root;
// };

// iterative inOrderTravelsal
var invertTree = function(root) {
  let tree = root;
  const stack = [];
  while (tree != null || stack.length > 0) {
    while (tree != null) {
      stack.push(tree);
      tree = tree.left;
    }
    if (stack.length > 0) {
      // 中序 
      tree = stack.pop();
      let right = tree.right;
      tree.right = tree.left;
      tree.left = right;
      tree = right;
    }
  }
  return root;
};

// @lc code=end


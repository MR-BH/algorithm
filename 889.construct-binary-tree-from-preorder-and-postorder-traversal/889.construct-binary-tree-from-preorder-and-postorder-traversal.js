/*
 * @lc app=leetcode id=889 lang=javascript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
// iterative
var constructFromPrePost = function(pre, post) {
  const root = new TreeNode(pre[0]);
  const stack = [ root ];
  let index = 0;
  for (let i = 1; i < pre.length; i++) {
    let top = stack[stack.length - 1];
    if (top.val === post[index]) {
      while (stack.length > 0 && stack[stack.length - 1].val === post[index]) {
        stack.pop();
        index++;
      }
      const element = new TreeNode(pre[i]);
      if (stack.length > 0) {
        stack[stack.length - 1].right = element;
      }
      stack.push(element);
    } else {
      top.left = new TreeNode(pre[i]);
      stack.push(top.left);
    }
  }
  return root;
};

// var constructFromPrePost = function(pre, post) {
//   const preLen = pre.length;
//   const postLen = post.length;
//   const map = {};
//   for (let i = 0; i < postLen; i++) {
//     map[post[i]] = i;
//   }
//   return buildTree(pre, 0, preLen - 1, map, 0, postLen - 1);
// };

// var buildTree = function(pre, preLeft, preRight, map, postLeft, postRight) {
//   if (preLeft > preRight || postLeft > postRight) return null;
//   const root = new TreeNode(pre[preLeft++]);
//   const index = map[pre[preLeft]];
//   root.left = buildTree(pre, preLeft, index - postLeft + preLeft, map, postLeft, index);
//   root.right = buildTree(pre, index - postLeft + preLeft + 1, preRight, map, index + 1, postRight - 1); 
//   return root;
// }
// @lc code=end


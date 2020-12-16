/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// recursive
var buildTree = function(preorder, inorder) {
  const preLen = preorder.length;
  const inLen = inorder.length;
  const map = {};
  for (let i = 0; i < inLen; i++) {
    map[inorder[i]] = i;
  }
  return buildTreeImpl(preorder, 0, preLen - 1, map, 0, inLen - 1);
};

var buildTreeImpl = function(preorder, preLeft, preRight, map, inLeft, inRight) {
  if (preLeft > preRight || inLeft > inRight) return null;

  const rootVal = preorder[preLeft]
  const root = new TreeNode(rootVal);
  const pIndex = map[rootVal];
  root.left = buildTreeImpl(preorder, preLeft + 1, pIndex - inLeft + preLeft, map, inLeft, pIndex - 1);
  root.right = buildTreeImpl(preorder, pIndex - inLeft + preLeft + 1, preRight, map, pIndex + 1, inRight);
  return root;
}

// iterative
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);
  const stack = [root];
  let index = 0;
  for (let i = 1; i < preorder.length; i++) {
    let top = stack[stack.length - 1];
    if (top.val === inorder[index]) {
      while (stack.length > 0 && stack[stack.length - 1].val === inorder[index]) {
        top = stack.pop();
        index++;
      }
      top.right = new TreeNode(preorder[i]);
      stack.push(top.right);
    } else {
      top.left = new TreeNode(preorder[i]);
      stack.push(top.left);
    }
  }
  return root;
};

// recursive enhance
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;
  let p = 0, i = 0;
  const build = function(stop) {
    if (inorder[i] !== stop) {
      const rootVal = preorder[p++];
      const root = new TreeNode(rootVal);
      root.left = build(rootVal);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  }
  return build();
};
// @lc code=end


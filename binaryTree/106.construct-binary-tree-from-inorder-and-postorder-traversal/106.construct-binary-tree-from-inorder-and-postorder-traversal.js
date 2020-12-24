/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// recursive
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) return null;
    const map = {};
    for (let i = 0; i < inorder.length; i++) {
      map[inorder[i]] = i;
    }
    return buildTreeImpl(map, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

var buildTreeImpl = function(map, inLeft, inRight, postorder, postLeft, postRight) {
  if (inLeft > inRight || postLeft > postRight) return null;
  const root = new TreeNode(postorder[postRight]);
  const index = map[root.val];
  root.left = buildTreeImpl(map, inLeft, index - 1, postorder, postLeft, index - 1 - inLeft + postLeft);
  root.right = buildTreeImpl(map, index + 1, inRight, postorder, postRight + index - inRight, postRight - 1)
  return root;
}

// recursivve enhance
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;
  let p = postorder.length - 1, i = inorder.length - 1;
  const build = function (stop) {
    if (inorder[i] != stop) {
      const root = new TreeNode(postorder[p--]);
      root.right = build(root.val);
      i--;
      root.left = build(stop);
      return root;
    }
    return null;
  }

  return build();
};

// iterative
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;
  const postLen = postorder.length;
  const root = new TreeNode(postorder[postLen - 1]);
  const stack = [root];
  let index = inorder.length - 1;
  for (let i = postorder.length - 2; i >=0; i--) {
    let top = stack[stack.length - 1];
    if (top.val === inorder[index]) {
      top = stack[stack.length - 1];
      while (stack.length > 0 && stack[stack.length - 1].val === inorder[index]) {
        index--;
        top = stack.pop();
      }
      top.left = new TreeNode(postorder[i]);
      stack.push(top.left);
    } else {
      top.right = new TreeNode(postorder[i]);
      stack.push(top.right);
    }
  }

  return root;
};

// @lc code=end


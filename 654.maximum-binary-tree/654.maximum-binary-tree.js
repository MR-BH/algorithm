/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return maximumBinaryTree(nums, 0, nums.length - 1)
};

var maximumBinaryTree = function (nums, l, r) {
  if (l > r) {
    return null;
  }
  const max = getMaxIndex(nums, l, r);
  const left = maximumBinaryTree(nums, l, max - 1);
  const right = maximumBinaryTree(nums, max + 1, r);
  const root = new TreeNode(nums[max], left, right);
  return root;
}

var getMaxIndex = function (nums, l, r) {
  let i = l;
  let max = -Infinity;
  let maxIndex;
  while (i <= r) {
    if (max < nums[i]) {
      max = nums[i];
      maxIndex = i;
    }
    i++;
  }
  return maxIndex;
}

var constructMaximumBinaryTree = function (nums) {
  const stack = [];
  let curNode = null;
  for (let i = 0; i < nums.length; i++) {
    curNode = new TreeNode(nums[i]);
    while (stack.length > 0 && stack[stack.length - 1].val < curNode.val) {
      const node = stack.pop();
      if (stack.length > 0 && stack[stack.length - 1].val < curNode.val) {
        stack[stack.length - 1].right = node;
      } else {
        curNode.left = node;
      }
    }
    stack.push(curNode);
  }

  while (stack.length > 0) {
    curNode = stack.pop();
    if (stack.length > 0) {
      stack[stack.length - 1].right = curNode;
    }
  }
  return curNode;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = constructMaximumBinaryTree;
// @after-stub-for-debug-end
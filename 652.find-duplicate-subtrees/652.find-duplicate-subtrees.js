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
  const answer = [];
  const treeMap = {};
  collect(root, answer, treeMap);
  return answer;
};

var collect = function(root, answer, treeMap) {
  if (root === null) return '#';
  const serial = `${root.val},${collect(root.left, answer, treeMap)},${collect(root.right, answer, treeMap)}`;
  if (treeMap[serial] != null) {
    treeMap[serial]++
  } else {
    treeMap[serial] = 1;
  }
  if (treeMap[serial] === 2) {
    answer.push(root);
  }
  return serial;
}

// enhance
var findDuplicateSubtrees = function(root) {
  let t = 1;
  const answer = [];
  const tree = {};
  const count = {};
  const lookup = function(node) {
    if (node == null) return 0;
    const serial = `${node.val},${lookup(node.left)},${lookup(node.right)}`;
    const uid = tree[serial] === undefined ? t++ : tree[serial];
    tree[serial] = uid
    if (count[uid] != null) {
      count[uid] = ++count[uid]
    } else {
      count[uid] = 1;
    }
    if (count[uid] === 2) {
      answer.push(node);
    }
    return uid;
  }
  lookup(root);
  return answer;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDuplicateSubtrees;
// @after-stub-for-debug-end
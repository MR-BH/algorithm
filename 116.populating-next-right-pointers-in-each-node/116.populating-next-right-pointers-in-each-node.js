/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// recursive
var connect = function(root) {
  if (root === null) return null;
  connectTwoNode(root.left, root.right);
  return root;
};

function connectTwoNode(left, right) {
  if (left === null || right === null) {
    return;
  }

  connectTwoNode(left.left, left.right);
  connectTwoNode(right.left, right.right);

  connectTwoNode(left.right, right.left);
  left.next = right;
}

// iterative 层次遍历
var connect = function(root) {
  if (root === null) return null;
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const element = queue.shift();
      if (i < length - 1) {
        element.next = queue[0];
      }
      if (element.left) {
        queue.push(element.left);
      }
      if (element.right) {
        queue.push(element.right);
      }
    }
  }
  return root;
};

// iterative
var connect = function(root) {
  if (root === null) return null;
  let leftmost = root;
  while (leftmost.left != null) {
    let head = leftmost;
    while (head != null) {
      head.left.next = head.right;
      if (head.next != null) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    leftmost = leftmost.left;
  }
  return root;
};

// recursive 拉拉链
var connect = function(root) {
  if (root === null) return null;
  let left = root.left;
  let right = root.right;
  while (left) {
    left.next = right;
    left = left.right;
    right = right.left;
  }
  connect(root.left);
  connect(root.right);
  return root;
};
// @lc code=end


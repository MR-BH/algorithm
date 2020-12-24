/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
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
// 层次遍历
var connect = function(root) {
  if (root == null) return null;

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const element = queue.shift();
      if (element.left != null) queue.push(element.left);
      if (element.right != null) queue.push(element.right);
      if (i < length - 1) element.next = queue[0];
    }
  }
  return root;
};

// 利用已有next指针
let last = null, nextStart = null;

const handle = (p) => {
  if (last != null) {
    last.next = p;
  }
  if (nextStart == null) {
    nextStart = p;
  }
  last = p;
}

var connect = function(root) {
  if (root == null) return null;
  let start = root;
  while (start != null) {
    last = null; nextStart = null;
    
    for (let p = start; p != null; p = p.next) {
      if (p.left != null) {
        handle(p.left);
      }
  
      if (p.right != null) {
        handle(p.right);
      }
    }

    start = nextStart;
  }

  return root;
};

// @lc code=end


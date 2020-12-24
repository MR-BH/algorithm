/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
    const nums = [];
    postorder(root, nums);
    return nums;
};

var postorder = function(root, nums) {
  if (root == null) return;
  postorder(root.left, nums);
  postorder(root.right, nums);
  nums.push(root.val);
}

// iterative
// preorder  root -> left -> right
// transform root -> right -> left
// postorder left -> right -> root
var postorderTraversal = function(root) {
  const nums = [];
  if (root == null) return nums;
  const stack1 = [];
  const stack2 = [];
  stack1.push(root);
  while (stack1.length > 0) {
    let node = stack1.pop();
    stack2.push(node);
    if (node.left != null) stack1.push(node.left);
    if (node.right != null) stack1.push(node.right);
  }
  while (stack2.length > 0) {
    nums.push(stack2.pop().val);
  }
  return nums;
};

// root -> left -> right
// root -> right -> left
// left -> right -> left
var postorderTraversal = function(root) {
  const nums = [];
  if (root == null) return nums;
  const stack = [];
  let tree = root;
  while (tree != null || stack.length > 0) {
    while (tree != null) {
      nums.unshift(tree.val);
      stack.push(tree);
      tree = tree.right;
    }
    tree = stack.pop();
    tree = tree.left;
  }
  return nums;
}

var postorderTraversal = function(root) {
  const nums = [];
  if (root == null) return nums;
  const stack = [ root ];
  let cur = root;
  while (stack.length > 0) {
    const peek = stack[stack.length - 1];
    if (peek.left != null && peek.left != cur && peek.right != cur) {
      stack.push(peek.left);
    } else if (peek.right != null && peek.right != cur) {
      stack.push(peek.right);
    } else {
      nums.push(stack.pop().val);
      cur = peek;
    }
  }
  return nums;
}

var postorderTraversal = function(root) {
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
      postMorris(cur.left, nums);
    }
    cur = cur.right;
  }
  postMorris(root, nums);
  return nums;
}

var postMorris = function(head, nums) {
  const reverseList = postMorrisReverseList(head);
  let cur = reverseList;
  while (cur != null) {
    nums.push(cur.val);
    cur = cur.right
  }
  postMorrisReverseList(reverseList);
}

var postMorrisReverseList = function(head) {
  let pre = null, cur = head;
  while (cur != null) {
    const next = cur.right;
    cur.right = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
// @lc code=end


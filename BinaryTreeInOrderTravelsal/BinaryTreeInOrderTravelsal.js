function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var left = new TreeNode(2, new TreeNode(1), new TreeNode(3))
var right = new TreeNode(7, new TreeNode(6), new TreeNode(9))
var root = new TreeNode(4, left, right)


// recursive
// function inOrderTraversal(root) {
//   if (root === null) return;
//   inOrderTraversal(root.left);
//   console.log(root.val);
//   inOrderTraversal(root.right);
// }


// iterative
function inOrderTraversal(root) {
  const stack = [];
  let tree = root;
  while (tree != null || stack.length > 0) {
    while (tree != null) {
      stack.push(tree);
      tree = tree.left;
    }
    if (stack.length > 0) {
      tree = stack.pop();
      console.log(tree.val);
      tree = tree.right;
    }
  }
}


inOrderTraversal(root)
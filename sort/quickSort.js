 /**
 * 快速排序
 * 二叉树前序遍历
 * 
 */

function quickSort(arr) {
  sort(arr, 0, arr.length);
}

function sort(arr, l, h) {
  if (l < h) {
    const p = partition(arr, l, h);
    sort(arr, l, p - 1);
    sort(arr, p + 1, h);
  }
}

function partition(nums, l, h) {
  const p = l;
  let i = l;
  let j = h;
  while (i < j) {
    while (arr[j] >= p && i < j) {
      j--;
    }
    while (arr[i] <= p && i < j) {
      i++;
    }
    swap(arr, i, j);
  }
  swap(arr, l, i);
  return i;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
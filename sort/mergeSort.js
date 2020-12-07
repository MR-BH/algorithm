 /**
 * 原地归并排序 & 手摇算法
 * 二叉树后序遍历
 * 
 * https://blog.csdn.net/xiaolewennofollow/article/details/50896881
 * https://blog.csdn.net/sysuwzl/article/details/7540316
 * https://blog.csdn.net/zhongkeli/article/details/8786694
 */

function mergeSort(arr) {
  sort(arr, 0, arr.length - 1);
}

function sort(arr, l, h) {
  if (l < h) {
    const m = (l + h) >> 1
    sort(arr, l, m);
    sort(arr, m + 1, h);
    merge(arr, l, m, h);
  }
}

function merge(arr, l, m, h) {
  let i = l;
  let j = m + 1;
  while (i < j && j <= h) {
    let step = 0;
    while (i < j && arr[i] <= arr[j]) {
      i++;
    }
    while (j <= h && arr[j] <= arr[i]) {
      j++;
      step++;
    }
    exchange(arr, i, j - i, j - i - step);
    i += step;
  }
}

function exchange(arr, start, n, i) {
  reverse(arr, start, start + i);
  reverse(arr, start + i, start + n);
  reverse(arr, start, start + n);
}

// reverse arr [start, end）
function reverse(arr, start, end) {
  end -= 1;
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
}


function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

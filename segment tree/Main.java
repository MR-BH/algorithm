/**
 * 线段树 HDU 3308
 * 
 * 自底向上的JAVA实现
 * https://blog.csdn.net/Yaokai_AssultMaster/article/details/79599809
 */

import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[])
    {
        Scanner reader = new Scanner(System.in);
        int T = reader.nextInt();

        while (T-- > 0)
        {
            int n, m;
            n = reader.nextInt();
            m = reader.nextInt();
            int t = n;
            int[] arr = new int[t];
            while (t > 0) {
              arr[n-t] = reader.nextInt();
              t--;
            }
            LCISSegmentTree lcisSegmentTree = new LCISSegmentTree(arr);
            while (m-- > 0) {
              String s = reader.next();
              int a, b;
              a = reader.nextInt();
              b = reader.nextInt();
              if ("U".equals(s)) {
                lcisSegmentTree.update(a, b);
              } else if ("Q".equals(s)) {
                System.out.println(lcisSegmentTree.query(a, b));
              }
            }
        }
    }
}

class Status {
  public int mx;
  public int lm;
  public int rm;
  public int s;
  public int e;
  Status(int mx, int lm, int rm, int s, int e) {
    this.mx = mx;
    this.lm = lm;
    this.rm = rm;
    this.s = s;
    this.e = e;
  }

  Status(int mx, int lm, int rm) {
    this.mx = mx;
    this.lm = lm;
    this.rm = rm;
  }
}

class LCISSegmentTree {
  private Status[] lcisSegmentTree;
  private int[] arr;
  private int n;

  LCISSegmentTree(int[] array) {
    arr = array;
    n = arr.length;
    lcisSegmentTree = new Status[2 * n];
    for (int i = n; i < 2 * n; i++) {
      lcisSegmentTree[i] = new Status(1, 1, 1, i, i);
    }
    for (int i = n - 1; i > 0; i--) {
      lcisSegmentTree[i] = merge(2 * i, 2 * i + 1);
    }
  }

  int query(int left, int right) {
    left = left + n;
    right = right + n;
    Status lmax = null;
    Status rmax = null;
    while (left < right) {
      if (left % 2 == 1) {
        if (null == lmax) {
          lmax = lcisSegmentTree[left];
        } else {
          lmax = mergeStatus(lmax, lcisSegmentTree[left]);
        }
        left++;
      }
      if (right % 2 == 0) {
        if (null == rmax) {
          rmax = lcisSegmentTree[right];
        } else {
          rmax = mergeStatus(lcisSegmentTree[right], rmax);
        }
        right--;
      }
      left = left / 2;
      right = right / 2;
    }
    Status max = null;
    if (left == right) {
      max = lcisSegmentTree[left];
    }
    if (lmax != null) {
      if (max != null) {
        max = mergeStatus(lmax, max);
      } else {
        max = lmax;
      }
    }
    if (rmax != null) {
      if (max != null) {
        max = mergeStatus(max, rmax);
      } else {
        max = rmax;
      }
    }
    return max.mx;
  }

  void update(int i, int value) {
    arr[i] = value;
    i = i + arr.length;
    while (i > 1) {
      i = i / 2;
      lcisSegmentTree[i] = merge(2 * i, 2 * i + 1);
    }
  }

  Status merge(int l, int r) {
    Status left = lcisSegmentTree[l];
    Status right = lcisSegmentTree[r];
    Status status = new Status(Math.max(left.mx, right.mx), left.lm, right.rm, left.s, right.e);
    if (arr[left.e - n] < arr[right.s - n]) {
      if (left.lm == left.e - left.s + 1) status.lm += right.lm;
      if (right.rm == right.e - right.s + 1) status.rm += left.rm;
      status.mx = Math.max(status.mx, left.rm + right.lm);
    }
    return status;
  }

  Status mergeStatus(Status left, Status right) {
    Status status = new Status(Math.max(left.mx, right.mx), left.lm, right.rm, left.s, right.e);
    if (arr[left.e - n] < arr[right.s - n]) {
      if (left.lm == left.e - left.s + 1) status.lm += right.lm;
      if (right.rm == right.e - right.s + 1) status.rm += left.rm;
      status.mx = Math.max(status.mx, left.rm + right.lm);
    }
    return status;
  }
}

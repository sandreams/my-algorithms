/**
 * @description: 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
const merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (nums1[p1] > nums2[p2] || p2 < 0) {
      nums1[i] = nums1[p1];
      p1 -= 1;
    } else if (nums1[p1] <= nums2[p2] || p1 < 0) {
      nums1[i] = nums2[p2];
      p2 -= 1;
    } else {
      break;
    }
  }
};

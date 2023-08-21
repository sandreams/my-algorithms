/**
 * @description: 给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。使用贪心算法实现
 * @param {Array[]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  const n = intervals.length
  if (n === 0) return 0
  // 按结束升序
  intervals.sort((a, b) => a[1] - b[1])
  let count = 0,
    end = intervals[0][1],
    i = 0
  while (++i < n) {
    if (intervals[i][0] < end) {
      count++
    } else {
      end = intervals[i][1]
    }
  }
  return count
}

module.exports = eraseOverlapIntervals

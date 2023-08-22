/**
 * @description:气球在一个水平数轴上摆放，可以重叠，飞镖垂直投向坐标轴，使得路径上的气球都被刺破。求解最小的投飞镖次数使所有气球都被刺破
 *              贪心算法计算最小不重叠区间，按右端升序排序实现
 * @param {Array[]} points
 * @return {number}
 */
const findMinArrowShots = (points) => {
  const length = points.length
  if (length === 0) return 0
  points.sort((a, b) => a[1] - b[1])
  let count = 1,
    end = points[0][1],
    loop = 0
  while (++loop < length) {
    if (points[loop][0] > end) {
      end = points[loop][1]
      count++
    }
  }
  return count
}

module.exports = findMinArrowShots

/**
 * @description:  根据颜色对数组 nums 进行分类与排序
 * @param {number[]} nums
 * @return {void}
 */
const sortColors = function (nums) {
  const red = 0
  const white = 1
  const blue = 2
  const map = new Map([
    [red, 0],
    [white, 0],
    [blue, 0],
  ])
  nums.forEach((v) => {
    if (map.get(v) !== undefined) {
      map.set(v, map.get(v) + 1)
    }
  })
  let index = 0
  for (const color of [red, white, blue]) {
    Array(map.get(color))
      .fill(color)
      .forEach((v) => {
        nums[index++] = v
      })
  }
}

module.exports = sortColors

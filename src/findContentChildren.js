/**
 * @description: 每个孩子都有一个满足度 grid，每个饼干都有一个大小 size，只有饼干的大小大于等于一个孩子的满足度，该孩子才会获得满足。求解最多可以获得满足的孩子数量。
 * @param {number[]} grid
 * @param {number[]} size
 * @return {number}
 */
const findContentChildren = (grid, size) => {
  grid.sort((a, b) => a - b)
  size.sort((a, b) => a - b)
  let [i, j] = [0, 0]
  while (i < grid.length && j < size.length) {
    if (grid[i] <= size[j]) {
      i++
    }
    j++
  }
  return i
}

module.exports = findContentChildren

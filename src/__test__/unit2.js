const frequencySort = require('../frequencySort')
const sortColors = require('../sortColors')

describe('字符出现频率倒序排序', () => {
  it('输入: s = "tree"', () => {
    const result = frequencySort('tree')
    expect(result).toBe('eetr')
  })
  it('输入: s = "cccaaa"', () => {
    const result = frequencySort('cccaaa')
    expect(result).toBe('cccaaa')
  })
  it('输入: s = "Aabb"', () => {
    const result = frequencySort('Aabb')
    expect(result).toBe('bbAa')
  })
})

describe('颜色分类', () => {
  it('输入：nums = [2,0,2,1,1,0]', () => {
    const nums = [2, 0, 2, 1, 1, 0]
    sortColors(nums)
    expect(nums.length).toBe(6)
    expect(nums).toEqual(expect.arrayContaining([0, 0, 1, 1, 2, 2]))
  })
  it('输入：nums = [2,0,1]', () => {
    const nums = [2, 0, 1]
    sortColors(nums)
    expect(nums.length).toBe(3)
    expect(nums).toEqual(expect.arrayContaining([0, 1, 2]))
  })
})

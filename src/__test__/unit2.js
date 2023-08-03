const frequencySort = require('../frequencySort')

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

const findContentChildren = require('../findContentChildren')
const eraseOverlapIntervals = require('../eraseOverlapIntervals')

describe('贪心策略', () => {
  it('输入: g = [10, 9, 8, 7], s = [5, 6, 7, 8]', () => {
    const g = [10, 9, 8, 7]
    const s = [5, 6, 7, 8]
    const result = findContentChildren(g, s)
    expect(result).toBe(2)
  })
  it('输入: g = [1,2,3], s = [1,1]', () => {
    const g = [1, 2, 3]
    const s = [1, 1]
    const result = findContentChildren(g, s)
    expect(result).toBe(1)
  })
  it('g = [1,2], s = [1,2,3]', () => {
    const g = [1, 2]
    const s = [1, 2, 3]
    const result = findContentChildren(g, s)
    expect(result).toBe(2)
  })
})

describe('不重叠区间个数', () => {
  it('输入: intervals = [[1,2],[2,3],[3,4],[1,3]]', () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ]
    const result = eraseOverlapIntervals(intervals)
    expect(result).toBe(1)
  })
  it('输入: intervals = [[1,2], [1,2], [1,2]]', () => {
    const intervals = [
      [1, 2],
      [1, 2],
      [1, 2],
    ]
    const result = eraseOverlapIntervals(intervals)
    expect(result).toBe(2)
  })
  it('输入: intervals = [[1,2], [2,3]]', () => {
    const intervals = [
      [1, 2],
      [2, 3],
    ]
    const result = eraseOverlapIntervals(intervals)
    expect(result).toBe(0)
  })
})

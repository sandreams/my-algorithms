const findContentChildren = require('../findContentChildren')
const eraseOverlapIntervals = require('../eraseOverlapIntervals')
const findMinArrowShots = require('../findMinArrowShots')
const reconstructQueue = require('../reconstructQueue')

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
describe('用最少数量的箭引爆气球', () => {
  it('输入：points = [[10,16],[2,8],[1,6],[7,12]]', () => {
    const points = [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ]
    const result = findMinArrowShots(points)
    expect(result).toBe(2)
  })
  it('输入：points = [[1,2],[3,4],[5,6],[7,8]]', () => {
    const points = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]
    const result = findMinArrowShots(points)
    expect(result).toBe(4)
  })
  it('输入：points = [[1,2],[2,3],[3,4],[4,5]]', () => {
    const points = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]
    const result = findMinArrowShots(points)
    expect(result).toBe(2)
  })
})

describe('根据身高重建队列', () => {
  it('输入：people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]', () => {
    const people = [
      [7, 0],
      [4, 4],
      [7, 1],
      [5, 0],
      [6, 1],
      [5, 2],
    ]
    const result = reconstructQueue(people)
    expect(result).toEqual([
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ])
  })
  it('输入：people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]', () => {
    const people = [
      [6, 0],
      [5, 0],
      [4, 0],
      [3, 2],
      [2, 2],
      [1, 4],
    ]
    const result = reconstructQueue(people)
    expect(result).toEqual([
      [4, 0],
      [5, 0],
      [2, 2],
      [3, 2],
      [1, 4],
      [6, 0],
    ])
  })
  it('输入：people = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]', () => {
    const people = [
      [9, 0],
      [7, 0],
      [1, 9],
      [3, 0],
      [2, 7],
      [5, 3],
      [6, 0],
      [3, 4],
      [6, 2],
      [5, 2],
    ]
    const result = reconstructQueue(people)
    expect(result).toEqual([
      [3, 0],
      [6, 0],
      [7, 0],
      [5, 2],
      [3, 4],
      [5, 3],
      [6, 2],
      [2, 7],
      [9, 0],
      [1, 9],
    ])
  })
})

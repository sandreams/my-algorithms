const twoSum = require('../twoSum')
const findLongestWord = require('../findLongestWord')
const findKthLargest = require('../findKthLargest')

describe('two sum', () => {
  it('输入：numbers = [2,7,11,15], target = 9', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    expect(result).toEqual([1, 2])
  })
})

describe('findLongestWord test', () => {
  it('输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]', () => {
    const result = findLongestWord('abpcplea', [
      'ale',
      'apple',
      'monkey',
      'plea',
    ])
    expect(result).toBe('apple')
  })
})

describe('数组中第 K 大的数', () => {
  it('输入: [3,2,1,5,6,4], k = 2', () => {
    const result = findKthLargest([3, 2, 1, 5, 6, 4], 2)
    expect(result).toBe(5)
  })
  it('输入: [3,2,3,1,2,4,5,5,6], k = 4', () => {
    const result = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
    expect(result).toBe(4)
  })
  it('输入: [1], k = 1', () => {
    const result = findKthLargest([1], 1)
    expect(result).toBe(1)
  })
  it('输入: 随机100长度数组', () => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max)
    }
    const nums = [...Array(100)].map((_) => getRandomInt(100))
    const k = getRandomInt(99) + 1
    const result = findKthLargest(nums, k)
    expect(result).toBe(nums.sort((a, b) => b - a)[k - 1])
  })
})

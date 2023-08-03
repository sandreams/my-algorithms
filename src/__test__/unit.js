const twoSum = require('../twoSum')
const findLongestWord = require('../findLongestWord')
const findKthLargest = require('../findKthLargest')
const createTopKFrequent = require('../topKFrequent')

describe('two sum', () => {
  it('输入：numbers = [2,7,11,15], target = 9', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    expect(result).toEqual([1, 2])
  })
})

describe('findLongestWord test', () => {
  it('输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]', () => {
    const result = findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea'])
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

describe('前 K 个高频元素，小顶堆实现', () => {
  const topKFrequent = createTopKFrequent('heap')
  it('输入: nums = [1,1,1,2,2,3], k = 2', () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2)
    // 验证长度
    expect(result.length).toBe(2)
    // 验证元素
    expect(result).toEqual(expect.arrayContaining([1, 2]))
  })
  it('输入: nums = [1], k = 1', () => {
    const result = topKFrequent([1], 1)
    expect(result).toEqual([1])
  })
  it('输入: nums = [5,2,5,3,5,3,1,1,3], k = 2', () => {
    const result = topKFrequent([5, 2, 5, 3, 5, 3, 1, 1, 3], 2)
    // 验证长度
    expect(result.length).toBe(2)
    // 验证元素
    expect(result).toEqual(expect.arrayContaining([3, 5]))
  })
  it('输入: nums = [-1,1,4,-4,3,5,4,-2,3,-1], k = 3', () => {
    const result = topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 6)
    // 验证长度
    expect(result.length).toBe(6)
    // 验证元素
    expect(result).toEqual(expect.arrayContaining([-3, -4, 0, 1, 4, 9]))
  })
})

describe('前 K 个高频元素，桶排序实现', () => {
  const topKFrequent = createTopKFrequent('bucket')
  it('输入: nums = [1,1,1,2,2,3], k = 2', () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2)
    // 验证长度
    expect(result.length).toBe(2)
    // 验证元素
    expect(result).toEqual(expect.arrayContaining([1, 2]))
  })
  it('输入: nums = [1], k = 1', () => {
    const result = topKFrequent([1], 1)
    expect(result).toEqual([1])
  })
  it('输入: nums = [5,2,5,3,5,3,1,1,3], k = 2', () => {
    const result = topKFrequent([5, 2, 5, 3, 5, 3, 1, 1, 3], 2)
    // 验证长度
    expect(result.length).toBe(2)
    // 验证元素
    expect(result).toEqual(expect.arrayContaining([3, 5]))
  })
  it('输入: nums = [-1,1,4,-4,3,5,4,-2,3,-1], k = 3', () => {
    const result = topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 6)
    // 验证长度
    expect(result.length).toBe(6)
    // 验证元素
    expect(result).toEqual(expect.arrayContaining([-3, -4, 0, 1, 4, 9]))
  })
})

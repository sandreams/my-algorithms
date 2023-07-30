const { MinHeap, MaxHeap } = require('../heap')

describe('最小堆测试', () => {
  const mh = new MinHeap()
  it('堆插入', () => {
    mh.push(3).push(7).push(4)
    const res1 = mh.getValue()
    expect(res1).toBe('3,7,4')
    mh.empty()
    mh.push(7).push(4).push(3)
    const res2 = mh.getValue()
    expect(res2).toBe('3,7,4')
    mh.push(10).push(12).push(14).push(15).push(9).push(6)
    const res3 = mh.getValue()
    expect(res3).toBe('3,6,4,7,12,14,15,10,9')
  })
  it('获取最小节点', () => {
    const peak1 = mh.peak()
    expect(peak1).toBe(3)
    mh.push(1)
    const peak2 = mh.peak()
    expect(peak2).toBe(1)
  })
  it('堆弹出最顶部的值（删除最小值）', () => {
    const result = []
    for (let index = 0; index < 5; index++) {
      const peak = mh.peak()
      result.push(peak)
      mh.pop()
    }
    expect(result).toEqual([1, 3, 4, 6, 7])
  })
})
describe('最大堆测试', () => {
  const mh = new MaxHeap()
  it('堆插入', () => {
    mh.push(3).push(7).push(4)
    const res1 = mh.getValue()
    expect(res1).toBe('7,3,4')
    mh.empty()
    mh.push(7).push(4).push(3)
    const res2 = mh.getValue()
    expect(res2).toBe('7,4,3')
    mh.push(10).push(12).push(14).push(15).push(9).push(6)
    const res3 = mh.getValue()
    expect(res3).toBe('15,10,14,9,7,3,12,4,6')
  })
  it('获取最大节点', () => {
    const peak1 = mh.peak()
    expect(peak1).toBe(15)
    mh.push(22)
    const peak2 = mh.peak()
    expect(peak2).toBe(22)
  })
  it('堆弹出最顶部的值（删除最大值）', () => {
    const result = []
    for (let index = 0; index < 5; index++) {
      const peak = mh.peak()
      result.push(peak)
      mh.pop()
    }
    expect(result).toEqual([22, 15, 14, 12, 10])
  })
})

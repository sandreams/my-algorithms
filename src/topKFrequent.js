const compare = (a, b) => {
  return a.p - b.p
}
const shiftUp = (heap) => {
  let index = heap.length - 1
  while (index > 0) {
    const parentIndex = ((index - 1) / 2) >>> 0
    if (compare(heap[index], heap[parentIndex]) < 0) {
      ;[heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]]
    } else {
      break
    }
    index = parentIndex
  }
}
const shiftDown = (heap) => {
  let index = 0
  const length = heap.length
  while (2 * index + 1 < length) {
    const leftIndex = 2 * index + 1
    let smallerIndex = leftIndex
    const rightIndex = 2 * index + 2
    if (rightIndex < length && compare(heap[rightIndex], heap[leftIndex]) < 0) {
      smallerIndex = rightIndex
    }
    if (compare(heap[smallerIndex], heap[index]) > 0) {
      break
    } else {
      ;[heap[smallerIndex], heap[index]] = [heap[index], heap[smallerIndex]]
    }
    index = smallerIndex
  }
}
/**
 * @description: 返回数组 nums 出现频率前 k 高的元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const bucket = {}
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i]
    if (bucket[index]) {
      bucket[index] += 1
    } else {
      bucket[index] = 1
    }
  }
  const q = []
  let loop = 0
  for (const key in bucket) {
    const obj = {
      v: Number(key),
      p: bucket[key],
    }
    if (loop < k) {
      q.push(obj)
      shiftUp(q)
    } else {
      if (compare(obj, q[0]) > 0) {
        q[0] = obj
        shiftDown(q)
      }
    }
    loop++
  }
  return q.map((e) => e.v)
}

module.exports = topKFrequent

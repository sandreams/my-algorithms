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
 * @description: 返回数组 nums 出现频率前 k 高的元素，小顶堆实现
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequentByMinHeap = (nums, k) => {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  const q = []
  let loop = 0
  for (const [key, v] of map.entries()) {
    const obj = {
      v: Number(key),
      p: v,
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

const buckerSort = (map, k) => {
  const arr = []
  for (const [k, v] of map.entries()) {
    if (!arr[v]) {
      arr[v] = [Number(k)]
    } else {
      arr[v].push(Number(k))
    }
  }
  // 对arr进行倒序排序
  const ret = []
  for (let i = arr.length - 1; i >= 0 && k > 0; i--) {
    if (arr[i]) {
      const length = arr[i].length
      if (k < length) {
        ret.push(...arr[i].slice(0, k))
      } else {
        ret.push(...arr[i])
      }
      k -= length
    }
  }
  return ret
}

/**
 * @description: 返回数组 nums 出现频率前 k 高的元素，桶排序实现
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequentByBucketSort = (nums, k) => {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  if (map.size <= k) {
    return [...map.keys()]
  }
  return buckerSort(map, k)
}

const createTopKFrequent = (implement = 'bucket') => {
  switch (implement) {
    case 'bucket':
      return topKFrequentByBucketSort
    case 'heap':
      return topKFrequentByMinHeap
    default:
      break
  }
}

module.exports = createTopKFrequent

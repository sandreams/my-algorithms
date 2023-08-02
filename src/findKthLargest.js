const hasLeftChild = (index, size) => {
  return 2 * index + 1 < size;
};
const shiftUp = (heap, startIndex) => {
  let index = startIndex;
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (heap[index] < heap[parentIndex]) {
      [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
    } else {
      break;
    }
    index = parentIndex;
  }
};
const shiftDown = (heap, startIndex) => {
  let index = startIndex;
  const length = heap.length;
  while (hasLeftChild(index, length)) {
    const leftChildIndex = 2 * index + 1;
    let smallerChildIndex = leftChildIndex;
    const rightChildIndex = 2 * index + 2;
    if (rightChildIndex < length && heap[leftChildIndex] > heap[rightChildIndex]) {
      smallerChildIndex = rightChildIndex;
    }
    if (heap[index] <= heap[smallerChildIndex]) {
      break;
    } else {
      [heap[index], heap[smallerChildIndex]] = [heap[smallerChildIndex], heap[index]];
    }
    index = smallerChildIndex;
  }
};

/**
 * @description: 返回数组中第 k 个最大的元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number | null}
 */
const findKthLargest = function (nums, k) {
  const heap = [];
  for (let i = 0; i < nums.length; i++) {
    // 构建最小堆
    if (i < k) {
      heap.push(nums[i]);
      shiftUp(heap, heap.length - 1);
    } else {
      if (nums[i] >= heap[0]) {
        heap[0] = nums[i];
        shiftDown(heap, 0);
      }
    }
  }
  return heap[0] || null;
};

module.exports = findKthLargest;

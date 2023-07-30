class Heap {
  constructor() {
    this.heapData = []
  }
  // 计算长度
  size() {
    return this.heapData.length
  }
  empty() {
    // 这里是方便测试用建的函数
    this.heapData = []
  }
  swap(index1, index2) {
    if (this.heapData[index1] && this.heapData[index2]) {
      ;[this.heapData[index1], this.heapData[index2]] = [
        this.heapData[index2],
        this.heapData[index1],
      ]
    }
  }
  compare(a, b) {
    return a - b
  }
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heapData.length
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heapData.length
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0
  }
  leftChild(index) {
    return this.heapData[this.getLeftChildIndex(index)]
  }
  RightChild(index) {
    return this.heapData[this.getRightChildIndex(index)]
  }
  parent(index) {
    return this.heapData[this.getParentIndex(index)]
  }
  getValue() {
    return this.heapData.toString()
  }
  peak() {
    return this.size === 0 ? null : this.heapData[0]
  }
  push(element) {
    if (this.siftUp) {
      this.heapData.push(element)
      // 调整位置
      this.siftUp(element, this.size() - 1)
    }
    return this
  }
  pop() {
    if (!this.size() || !this.siftDown) {
      return
    }
    const last = this.heapData.pop()
    if (this.size() !== 0) {
      this.heapData[0] = last
      this.siftDown(last, 0)
    }
  }
}

// 最小堆
class MinHeap extends Heap {
  constructor() {
    super()
  }
  siftUp(node, i) {
    // i 为比较的起始位置
    let index = i
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      const parent = this.heapData[parentIndex]
      if (this.compare(node, parent) < 0) {
        // 子节点 < 父节点，两者交换
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }
  siftDown(node, i) {
    let index = i
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (this.hasRightChild(index)) {
        const rightChildIndex = this.getRightChildIndex(index)
        const rightChild = this.heapData[rightChildIndex]
        const leftChild = this.heapData[smallerChildIndex]
        if (rightChild < leftChild) {
          smallerChildIndex = rightChildIndex
        }
        if (node < this.heapData[smallerChildIndex]) {
          break
        } else {
          this.swap(index, smallerChildIndex)
        }
        index = smallerChildIndex
      }
    }
  }
}

class MaxHeap extends Heap {
  constructor() {
    super()
  }
  siftUp(node, i) {
    // i 为比较的起始位置
    let index = i
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      const parent = this.heapData[parentIndex]
      if (this.compare(node, parent) > 0) {
        // 子节点 > 父节点，两者交换
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }
  siftDown(node, i) {
    let index = i
    while (this.hasLeftChild(index)) {
      let biggerChildIndex = this.getLeftChildIndex(index)
      if (this.hasRightChild(index)) {
        const rightChildIndex = this.getRightChildIndex(index)
        const rightChild = this.heapData[rightChildIndex]
        const leftChild = this.heapData[biggerChildIndex]
        if (rightChild > leftChild) {
          biggerChildIndex = rightChildIndex
        }
        if (node > this.heapData[biggerChildIndex]) {
          break
        } else {
          this.swap(index, biggerChildIndex)
        }
        index = biggerChildIndex
      }
    }
  }
}

module.exports = {
  MinHeap,
  MaxHeap,
}
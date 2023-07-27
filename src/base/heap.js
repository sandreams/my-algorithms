// 最小堆
class MinHeap {
  constructor() {
    this.heapData = [];
  }
  // 计算长度
  size() {
    return this.heapData.length;
  }
  // 获取最小堆的值
  peak() {
    return this.heapData[0];
  }
  push(element) {
    this.heapData.push(element);
    // 调整位置
    this.siftUp();
  }
  siftUp() {}
}

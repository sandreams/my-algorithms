// 基础队列
class Queue {
  constructor() {
    this.queueData = [];
  }
  enqueue(element) {
    // 入队操作
    this.queueData.push(element);
  }
  dequeue() {
    // 出队操作
    return this.queueData.shift();
  }
  front() {
    // 返回队列的第一个元素
    return this.queueData[0];
  }
  isEmpty() {
    // 如果队列是空返回true ，否则返回false
    return !this.queueData.length;
  }
  size() {
    // 返回队列中元素的个数
    return this.queueData.length;
  }
  clear() {
    // 清空整个队列
    this.queueData = [];
  }
}

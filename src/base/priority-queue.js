/*
 * @Author: fan
 * @Date: 2023-07-25 16:13:55
 * @LastEditors: fan
 * @LastEditTime: 2023-08-01 16:40:33
 * @FilePath: \algorithms\src\base\priority-queue.js
 * @Description: JavaScript 实现优先队列
 */

const { MaxHeap } = require('./heap');

/* 
  第一种：通过数组方式实现
  时间复杂度：
  查找最大 O(1)
  插入 O(N)
  删除 O(N)
*/
class QElement {
  constructor(element, priority = 0) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueueByArray {
  constructor() {
    this.queueData = [];
  }
  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let contain = false;
    for (let i = 0; i < this.queueData.length; i++) {
      if (this.queueData[i].priority > qElement.priority) {
        this.queueData.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.queueData.push(qElement);
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    return this.queueData.pop();
  }
  front() {
    if (this.isEmpty()) {
      return 'No Element in Queue';
    }
    return this.queueData[this.queueData.length - 1];
  }
  rear() {
    if (this.isEmpty()) {
      return 'No Element in Queue';
    }
    return this.queueData[0];
  }
  isEmpty() {
    return !this.queueData.length;
  }
  print() {
    let printText = '';
    if (!this.queueData.length) {
      printText = 'empty';
    } else {
      printText += this.queueData.reduce((pre, cur) => {
        return pre + cur.element + '-->';
      }, '-->');
    }
    console.log(printText);
    return printText;
  }
}

const compareFn = (element1, element2) => {
  return element1.priority - element2.priority;
};
class PriorityQueueByHeap extends MaxHeap {
  constructor(compare = compareFn) {
    super(compare);
    this.queueData = this.heapData;
  }
  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    this.push(qElement);
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    const peak = this.peak();
    this.pop();
    return peak;
  }
  isEmpty() {
    return !this.queueData.length;
  }
  print() {
    let printText = '';
    if (!this.queueData.length) {
      printText = 'empty';
    } else {
      printText += this.queueData.reduce((pre, cur) => {
        return pre + cur.element + '-->';
      }, '-->');
    }
    console.log(printText);
    return printText;
  }
}

class PriorityQueue {
  createQueue(implementType = 'array') {
    switch (implementType) {
      case 'array':
        return new PriorityQueueByArray();
      case 'heap':
        return new PriorityQueueByHeap();
      default:
        throw new Error('Invalid implement type');
    }
  }
}

module.exports = {
  PriorityQueue,
  QElement,
};

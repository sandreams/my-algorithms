/*
 * @Author: fan
 * @Date: 2023-07-25 16:13:55
 * @LastEditors: your name
 * @LastEditTime: 2023-07-30 23:11:47
 * @FilePath: \my-algorithms\src\base\priority-queue.js
 * @Description: JavaScript 实现优先队列
 */

const { MaxHeap } = require('./heap')

/* 
  第一种：通过数组方式实现
  时间复杂度：
  查找最大 O(1)
  插入 O(N)
  删除 O(N)
*/
class QElement {
  constructor(element, priority = 0) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueueByArray {
  constructor() {
    this.queueData = []
  }
  enqueue(element, priority) {
    const qElement = new QElement(element, priority)
    let contain = false
    for (let i = 0; i < this.queueData.length; i++) {
      if (this.queueData[i].priority > qElement.priority) {
        this.queueData.splice(i, 0, qElement)
        contain = true
        break
      }
    }
    if (!contain) {
      this.queueData.push(qElement)
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'underflow'
    }
    return this.queueData.pop()
  }
  front() {
    if (this.isEmpty()) {
      return 'No Element in Queue'
    }
    return this.queueData[this.queueData.length - 1]
  }
  rear() {
    if (this.isEmpty()) {
      return 'No Element in Queue'
    }
    return this.queueData[0]
  }
  isEmpty() {
    return !this.queueData.length
  }
  print() {
    let printText = ''
    if (!this.queueData.length) {
      printText = 'empty'
    } else {
      printText += this.queueData.reduce((pre, cur) => {
        return pre + cur.element + '-->'
      }, '-->')
    }
    console.log(printText)
    return printText
  }
}

class PriorityQueueByHeap extends MaxHeap {}

class PriorityQueue {
  createQueue(implementType = 'array') {
    switch (implementType) {
      case 'array':
        return new PriorityQueueByArray()
      case 'heap':
        break
      default:
        throw new Error('Invalid implement type')
    }
  }
}

module.exports = {
  PriorityQueue,
  QElement,
}

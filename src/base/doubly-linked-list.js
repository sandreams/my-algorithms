const { LinkedList, ListNode } = require('./linked-list')

/**
 * @description: 比较两个双链表节点是否相等
 * @param {DoublyNode} a
 * @param {DoublyNode} b
 * @return {boolean}
 */
const defaultEqualFn = (a, b) => {
  return a.val === b.val
}

class DoublyNode extends ListNode {
  constructor(val, next, prev = null) {
    super(val, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalFn = defaultEqualFn) {
    super(equalFn)
    this.tail = null
  }
  push(element) {
    const node = new DoublyNode(element, null, this.tail)
    if (!this.head) {
      this.head = node
    }
    if (this.tail) {
      this.tail.next = node
    }
    this.tail = node
    this.count++
    return this
  }
  insert(index, element) {
    if (index < 0 || index > this.count) {
      return this
    }
    const curNode = this.getElementAt(index)
    const preNode = index > 0 ? this.getElementAt(index - 1) : null
    const node = new DoublyNode(element, curNode, preNode)
    if (index === 0) {
      // 头部插入
      this.head = node
      curNode.prev = node
    } else if (index === this.count) {
      // 尾部插入
      this.tail = node
      preNode.next = node
    } else {
      // 中间插入
      preNode.next = node
      curNode.prev = node
    }
    this.count++
    return this
  }
  getElementAt(index) {
    if (Math.abs(index) > this.count) {
      return null
    }
    const endIndex = index >= 0 ? index : this.count + index
    let node = null
    if (endIndex < this.count - endIndex) {
      // 从头部开始索引
      node = this.head
      for (let i = 0; i < endIndex; i++) {
        node = node.next
      }
    } else {
      // 从尾部开始索引
      node = endIndex >= this.count ? null : this.tail
      for (let i = 0; i < this.count - endIndex - 1; i++) {
        node = node.prev
      }
    }
    return node
  }
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return
    }
    const nextNode = this.getElementAt(index + 1)
    const preNode = index > 0 ? this.getElementAt(index - 1) : null
    if (index === 0) {
      this.head = nextNode
      nextNode.prev = null
    } else if (index === this.count - 1) {
      this.tail = preNode
      preNode.next = null
    } else {
      preNode.next = nextNode
      nextNode.prev = preNode
    }
    this.count--
    return this
  }
  remove(element) {
    const index = this.indexOf(element)
    if (index >= 0) {
      this.removeAt(index)
    }
    return this
  }
  getTail() {
    return this.tail
  }
  print() {
    let current = this.head
    let placeText = ''
    while (current) {
      placeText += `${current.val}-->`
      current = current.next
    }
    if (!this.head) {
      placeText += 'null-->'
    }
    const printText = `head-->${placeText}tail`
    console.log(printText)
    return printText
  }
  dir() {
    let current = this.head
    const outputDir = {
      head: current,
    }
    for (let i = 0; i < this.count; i++) {
      outputDir[i] = current
      current = current.next
    }
    outputDir['tail'] = this.tail
    console.log(outputDir)
    return outputDir
  }
}

module.exports = {
  DoublyNode,
  DoublyLinkedList,
}

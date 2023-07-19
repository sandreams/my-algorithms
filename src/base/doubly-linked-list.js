const { LinkedList, ListNode } = require('./linked-list');

/**
 * @description: 比较两个双链表节点是否相等
 * @param {DoublyNode} a
 * @param {DoublyNode} b
 * @return {boolean}
 */
const defaultEqualFn = (a, b) => {
  return a.val === b.val;
};

class DoublyNode extends ListNode {
  constructor(val, next, prev = null) {
    super(val, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalFn = defaultEquals) {
    super(equalFn);
    this.tail = null;
  }
  push(element) {
    const node = new DoublyNode(element, null, this.tail);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    this.count++;
    return this;
  }
  insert(index, element) {
    if (index < 0 || index > this.count) {
      return this;
    }
    const curNode = this.getElementAt(index);
    const preNode = index > 0 ? this.getElementAt(index - 1) : null;
    const node = new DoublyNode(element, curNode, preNode);
    if (index === 0) {
      // 头部插入
      this.head = node;
      curNode.prev = node;
    } else if (index === this.count) {
      // 尾部插入
      this.tail = node;
      preNode.next = node;
    } else {
      // 中间插入
      preNode.next = node;
      curNode.prev = node;
    }
    this.count++;
    return this;
  }
  print() {
    let current = this.head;
    let placeText = '';
    while (current) {
      placeText += `${current.val}-->`;
      current = current.next;
    }
    if (!this.head) {
      placeText += 'null-->';
    }
    const printText = `head-->${placeText}tail`;
    console.log(printText);
    return printText;
  }
  dir() {
    let current = this.head;
    const outputDir = {
      head: current,
    };
    for (let i = 0; i < this.count; i++) {
      outputDir[i] = current;
      current = current.next;
    }
    outputDir['tail'] = this.tail;
    console.log(outputDir);
    return outputDir;
  }
}

module.exports = {
  DoublyNode,
  DoublyLinkedList,
};

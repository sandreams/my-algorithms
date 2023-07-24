/**
 * @description:
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {boolean}
 */
const defaultEqualFn = (a, b) => {
  return a.val === b.val;
};

class ListNode {
  constructor(val, next = null) {
    if (val instanceof ListNode) {
      this.val = val.val;
      this.next = val.next;
    } else {
      this.val = val;
      this.next = next;
    }
  }
}

class LinkedList {
  constructor(equalFn = defaultEqualFn) {
    this.count = 0;
    this.head = null;
    this.equalFn = equalFn;
  }
  push(element) {
    const node = element instanceof ListNode ? element : new ListNode(element);
    if (!this.head) {
      this.head = node;
    } else {
      this.getLast().next = node;
    }
    this.count += 1;
    return this;
  }
  insert(index, element) {
    if (index < 0 || index > this.count) {
      return this;
    }
    const curNode = this.getElementAt(index);
    const node = element instanceof ListNode ? element : new ListNode(element);
    if (index !== this.count - 1) {
      node.next = curNode;
    }
    if (index === 0) {
      this.head = node;
      node.next = curNode;
    } else {
      const preNode = this.getElementAt(index - 1);
      preNode.next = node;
    }
    this.count += 1;
    return this;
  }
  getElementAt(index) {
    if (Math.abs(index) > this.count || index === this.count) {
      return null;
    }
    const endIndex = index >= 0 ? index : this.count + index;
    let node = this.head;
    for (let i = 0; i < endIndex; i++) {
      node = node.next;
    }
    return node;
  }
  getLast() {
    return this.getElementAt(-1);
  }
  remove(element) {
    const index = this.indexOf(element);
    if (index >= 0) {
      this.removeAt(index);
    }
    return this;
  }
  removeAt(index) {
    const delNode = this.getElementAt(index);
    if (delNode) {
      if (index === 0) {
        this.head = delNode.next;
      } else {
        const preNode = this.getElementAt(index - 1);
        preNode.next = delNode.next;
      }
      this.count--;
    }
    return this;
  }
  indexOf(element) {
    const node = element instanceof ListNode ? element : new ListNode(element);
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalFn(node, current) === true) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  isEmpty() {
    return this.count <= 0;
  }
  size() {
    return this.count;
  }
  getHead() {
    return this.head;
  }
  hasCycle() {
    // 是否是环形链表
    if (!this.head) return false;
    let slow = this.head;
    let fast = this.head.next;
    while (slow && fast && fast.next) {
      if (slow === fast) {
        return true;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }
  // dir() {
  //   let current = this.head;
  //   const outputDir = {
  //     head: current,
  //   };
  //   for (let i = 0; i < this.count; i++) {
  //     outputDir[i] = current;
  //     current = current.next;
  //   }
  //   console.log(outputDir);
  // }
  print() {
    let current = this.head;
    let printText = 'head-->';
    for (let i = 0; i < this.count; i++) {
      if (current) {
        printText += `${current.val}-->`;
        current = current.next;
      }
    }
    if (!this.head) {
      printText += 'null';
    } else {
      printText = printText.substring(0, printText.length - 3);
    }
    console.log(printText);
    return printText;
  }
}

module.exports = {
  LinkedList,
  ListNode,
};

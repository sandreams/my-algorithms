const defaultEquals = (a, b) => {
  return a === b;
};

class ListNode {
  constructor(val) {
    if (val instanceof ListNode) {
      this.val = val.val;
    } else {
      this.val = val;
    }
    this.next = null;
  }
}

class LinkedList {
  constructor(equalFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalFn = equalFn;
  }
  push(element) {
    const node = new ListNode(element);
    if (!this.head) {
      this.head = node;
    } else {
      this.getLast().next = node;
    }
    this.count += 1;
    return this;
  }
  insert(index, element) {
    const node = new ListNode(element);
    if (index < 0 || index > this.count) {
      return this;
    }
    const curNode = this.getElementAt(index);
    if (index === 0) {
      this.head = node;
    } else {
      const preNode = this.getElementAt(index - 1);
      preNode.next = node;
    }
    node.next = curNode;
    this.count += 1;
    return this;
  }
  getElementAt(index) {
    if (Math.abs(index) > this.count) {
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
    }
    return this;
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalFn(element, current.val)) {
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
  print() {
    let current = this.head;
    let printText = 'head-->';
    while (current) {
      printText += `${current.val}-->`;
      current = current.next;
    }
    if (!this.head) {
      printText += 'null';
    } else {
      printText = printText.substring(0, printText.length - 3);
    }
    console.log(printText);
  }
}

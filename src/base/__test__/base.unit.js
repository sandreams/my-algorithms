const { LinkedList, ListNode } = require('../linked-list');
const { DoublyLinkedList, DoublyNode } = require('../doubly-linked-list');
const { PriorityQueue, QElement } = require('../priority-queue');

describe('链表测试', () => {
  const ll = new LinkedList();
  const ll2 = new LinkedList();
  test('链表插入元素 test', () => {
    const node = new ListNode(2);
    ll.push(1).push(node).push(3).insert(0, 4).insert(2, 5).push(new ListNode(6, node));
    const result = ll.print();
    expect(result).toBe('head-->4-->1-->5-->2-->3-->6');
  });
  it('返回指定位置的元素', () => {
    const result = [
      ll.getElementAt(0).val,
      ll.getElementAt(2).val,
      ll.getElementAt(6),
      ll.getElementAt(-1).val,
      ll.getElementAt(-6).val,
      ll.getElementAt(-7),
    ];
    expect(result).toEqual([4, 5, null, 6, 4, null]);
  });
  it('返回元素所在的位置', () => {
    const result = [ll.indexOf(4), ll.indexOf(3), ll.indexOf(0)];
    expect(result).toEqual([0, 4, -1]);
  });
  it('链表删除 test', () => {
    ll.removeAt(0).remove(2);
    const result = ll.print();
    expect(result).toBe('head-->1-->5-->3-->6');
  });
  it('返回链表长度', () => {
    ll2.push(1).push(2).push(2).insert(0, 4).insert(1, 5).remove(2).removeAt(0);
    expect(ll2.size()).toBe(3);
  });
  it('判断环形链表', () => {
    expect(ll.hasCycle()).toBe(true);
    expect(ll2.hasCycle()).toBe(false);
  });
});

describe('双向链表测试', () => {
  const dll = new DoublyLinkedList();
  const dll2 = new DoublyLinkedList();
  test('插入元素 test', () => {
    const node = new DoublyNode(2);
    dll.push(1).push(node).push(3).insert(0, 4).insert(2, 5).push(new DoublyNode(6, node));
    const result = dll.print();
    expect(result).toBe('head-->4-->1-->5-->2-->3-->6-->tail');
  });
  it('返回指定位置的元素', () => {
    const result = [
      dll.getElementAt(0).val,
      dll.getElementAt(2).val,
      dll.getElementAt(6),
      dll.getElementAt(-1).val,
      dll.getElementAt(-6).val,
      dll.getElementAt(-7),
    ];
    expect(result).toEqual([4, 5, null, 6, 4, null]);
  });
  it('返回元素所在的位置', () => {
    const result = [dll.indexOf(4), dll.indexOf(3), dll.indexOf(0)];
    expect(result).toEqual([0, 4, -1]);
  });
  it('链表删除 test', () => {
    dll.removeAt(0).remove(2);
    const result = dll.print();
    expect(result).toBe('head-->1-->5-->3-->6-->tail');
  });
  it('返回链表长度', () => {
    dll2.push(1).push(2).push(2).insert(0, 4).insert(1, 5).remove(2).removeAt(0);
    expect(dll2.size()).toBe(3);
  });
  it('判断环形链表', () => {
    expect(dll.hasCycle()).toBe(true);
    expect(dll2.hasCycle()).toBe(false);
  });
});

describe('优先队列测试1 （数组实现）', () => {
  const priorityQueue = new PriorityQueue();
  const q = priorityQueue.createQueue('array');
  it('入队', () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    q.enqueue(6);
    q.enqueue(7);
    q.enqueue(8);
    q.enqueue(9);
    q.enqueue(10);
    const result = q.print();
    expect(result).toBe('-->1-->2-->3-->4-->5-->6-->7-->8-->9-->10-->');
  });
  it('查找最大', () => {
    const res1 = q.dequeue();
    const res2 = q.dequeue();
    expect([res1.element, res2.element]).toEqual([10, 9]);
  });
});

describe('优先队列测试2 （堆实现）', () => {});

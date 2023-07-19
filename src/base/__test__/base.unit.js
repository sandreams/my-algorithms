const { LinkedList } = require('../linked-list')
const { DoublyLinkedList } = require('../doubly-linked-list')

describe('链表测试', () => {
  const ll = new LinkedList()
  test('链表插入元素 test', () => {
    ll.push(1).push(2).push(3).insert(0, 4).insert(2, 5)
    const result = ll.print()
    expect(result).toBe('head-->4-->1-->5-->2-->3')
  })
  it('返回指定位置的元素', () => {
    const result = [
      ll.getElementAt(0).val,
      ll.getElementAt(2).val,
      ll.getElementAt(-1).val,
      ll.getElementAt(-2).val,
    ]
    expect(result).toEqual([4, 5, 3, 2])
  })
  it('返回元素所在的位置', () => {
    const result = [ll.indexOf(4), ll.indexOf(3), ll.indexOf(0)]
    expect(result).toEqual([0, 4, -1])
  })
  it('链表删除 test', () => {
    ll.removeAt(0).remove(2)
    const result = ll.print()
    expect(result).toBe('head-->1-->5-->3')
  })
  it('返回链表长度', () => {
    const ll2 = new LinkedList()
    ll2.push(1).push(2).push(2).insert(0, 4).insert(1, 5).remove(2).removeAt(0)
    expect(ll2.size()).toBe(3)
  })
})

describe('双向链表测试', () => {
  const dll = new DoublyLinkedList()
  test('插入元素 test', () => {
    dll.push(1).push(2).push(3).insert(0, 4).insert(2, 5)
    const result = dll.print()
    expect(result).toBe('head-->4-->1-->5-->2-->3-->tail')
  })
  it('返回指定位置的元素', () => {
    const result = [
      dll.getElementAt(0).val,
      dll.getElementAt(2).val,
      dll.getElementAt(-1).val,
      dll.getElementAt(-2).val,
    ]
    expect(result).toEqual([4, 5, 3, 2])
  })
  it('返回元素所在的位置', () => {
    const result = [dll.indexOf(4), dll.indexOf(3), dll.indexOf(0)]
    expect(result).toEqual([0, 4, -1])
  })
  it('链表删除 test', () => {
    dll.removeAt(0).remove(2)
    const result = dll.print()
    expect(result).toBe('head-->1-->5-->3-->tail')
  })
  it('返回链表长度', () => {
    const dll2 = new DoublyLinkedList()
    dll2.push(1).push(2).push(2).insert(0, 4).insert(1, 5).remove(2).removeAt(0)
    expect(dll2.size()).toBe(3)
  })
})

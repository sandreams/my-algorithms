const twoSum = require('../twoSum');
const findLongestWord = require('../findLongestWord');

describe('two sum', () => {
  it('输入：numbers = [2,7,11,15], target = 9', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([1, 2]);
  });
});

describe('findLongestWord test', () => {
  it('输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]', () => {
    const result = findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']);
    expect(result).toBe('apple');
  });
});

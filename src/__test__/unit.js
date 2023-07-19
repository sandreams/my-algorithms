const twoSum = require('../twoSum');

describe('two sum', () => {
  it('输入：numbers = [2,7,11,15], target = 9', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([1, 2]);
  });
});

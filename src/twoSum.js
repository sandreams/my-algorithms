/**
 * @description: 在有序数组中找出两个数，使它们的和为 target
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (numbers, target) {
  let l_pointer = 0;
  let r_pointer = numbers.length - 1;
  let isMatched = false;
  while (l_pointer < r_pointer) {
    if (numbers[l_pointer] + numbers[r_pointer] > target) {
      r_pointer -= 1;
      continue;
    } else if (numbers[l_pointer] + numbers[r_pointer] < target) {
      l_pointer += 1;
      continue;
    } else {
      isMatched = true;
      break;
    }
  }
  return isMatched ? [l_pointer + 1, r_pointer + 1] : [];
};

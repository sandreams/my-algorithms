const square = function (n) {
  return Math.pow(n, 2);
};

/**
 * @description: 给定一个非负整数 c ，判断是否存在两个整数 a 和 b，使得 a2 + b2 = c
 * @param {number} c
 * @return {boolean}
 */
export const judgeSquareSum = function (c) {
  let left_num = 0;
  let right_num = Math.floor(Math.sqrt(c));
  let isMatched = false;
  while (left_num <= right_num) {
    if (square(left_num) + square(right_num) < c) {
      left_num += 1;
      continue;
    } else if (square(left_num) + square(right_num) > c) {
      right_num -= 1;
      continue;
    } else {
      isMatched = true;
      break;
    }
  }
  return isMatched;
};

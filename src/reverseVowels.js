const isVowels = function (c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) >= 0;
};

const swapChar = function (s, left, right) {
  const temp = s[left];
  s[left] = s[right];
  s[right] = temp;
};

/**
 * @description: 反转字符串中的元音字符, 方法1
 * @param {string} s
 * @return {string}
 */
// const reverseVowels = function (s) {
//   let left_char = 0;
//   let right_char = s.length - 1;
//   const output = [];
//   while (left_char <= right_char) {
//     const left_val = s[left_char];
//     const right_val = s[right_char];
//     if (!isVowels(left_val)) {
//       output[left_char++] = left_val;
//     } else if (!isVowels(right_val)) {
//       output[right_char--] = right_val;
//     } else {
//       output[left_char++] = right_val;
//       output[right_char--] = left_val;
//     }
//   }
//   return output.join('');
// };

/**
 * @description: 反转字符串中的元音字符, 方法2
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  let left_char = 0;
  let right_char = s.length - 1;
  const charList = s.split('');
  while (left_char < right_char) {
    while (!isVowels(charList[left_char]) && left_char < right_char) {
      left_char++;
    }
    while (!isVowels(charList[right_char]) && left_char < right_char) {
      right_char--;
    }
    swapChar(charList, left_char, right_char);
    left_char += 1;
    right_char -= 1;
  }
  return charList.join('');
};

const isPalindrome = function (str, i, j) {
  while (i < j) {
    if (str[i++] !== str[j--]) {
      return false;
    }
  }
  return true;
};
/**
 * @description: 判断 s 是否能成为回文字符串，最多可以从中删除一个字符
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j);
    }
  }
  return true;
};

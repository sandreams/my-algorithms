const isSubstr = (s, target) => {
  let [p1, p2] = [0, 0];
  while (s[p1] && target[p2]) {
    if (s[p1] === target[p2]) {
      p1++;
    }
    p2++;
  }
  return p1 === s.length;
};

/**
 * @description: 删除 s 中的一些字符，使得它构成字符串列表 d 中的一个字符串，找出能构成的最长字符串。如果有多个相同长度的结果，返回字典序的最小字符串。
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = function (s, dictionary) {
  let longest = 0;
  let result = '';
  for (let i = 0; i < dictionary.length; i++) {
    const str = dictionary[i];
    const isMatch = isSubstr(str, s);
    if (isMatch) {
      if (str.length > longest || (str.length === longest && str < result)) {
        result = str;
        longest = str.length;
      }
    }
  }
  return result;
};

module.exports = findLongestWord;

const buckerSort = (map, k) => {
  const arr = []
  for (const [k, v] of map.entries()) {
    if (!arr[v]) {
      arr[v] = [Number(k)]
    } else {
      arr[v].push(Number(k))
    }
  }
  // 对arr进行倒序排序
  const ret = []
  for (let i = arr.length - 1; i >= 0 && k > 0; i--) {
    if (arr[i]) {
      const length = arr[i].length
      if (k < length) {
        ret.push(...arr[i].slice(0, k))
      } else {
        ret.push(...arr[i])
      }
      k -= length
    }
  }
  return ret
}

/**
 * @description: 给定一个字符串 s ，根据字符出现的 频率 对其进行 降序排序
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    const character = s[i]
    map.set(character, (map.get(character) || 0) + 1)
  }
  const arr = []
  map.forEach((v, k) => {
    arr.push({
      v,
      k,
    })
  })
  arr.sort((a, b) => b.v - a.v)
  return arr.reduce((pre, cur) => pre + cur.k.repeat(cur.v), '')
}

module.exports = frequencySort

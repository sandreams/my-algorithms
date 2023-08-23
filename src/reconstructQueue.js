/**
 * @description: 根据身高和序号重组队列，身高从大到小排序后根据学生序号做插入操作
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1])
  const res = []
  people.forEach((p) => {
    res.splice(p[1], 0, p)
  })
  return res
}

module.exports = reconstructQueue

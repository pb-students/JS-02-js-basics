const generate = () => {
  const res = []
  let sum = 0;

  while (sum < 200) {
    const num = Math.random() * 10 % 10 + 1 ^ 0
    res.push(num)
    sum += num
  }

  return res;
}

const removeFirstMin = arr => arr.splice(arr.indexOf(Math.min(...arr)), 1)
const removeLastMax = arr => arr.splice(arr.lastIndexOf(Math.max(...arr)), 1)
const logSumDict = arr => console.log(arr.reduce((a, b) => (a[b] ??= 0, a[b] += 1, a), {}))
const move9Elements = arr => arr.push(...arr.splice(0, 9))

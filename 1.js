console.log(...[...Array(100).keys()].map(i => {
  let res = ''
  if ((i + 1) % 2 == 0) {
    res += 'Fizz'
  }
  
  if ((i + 1) % 3 == 0) {
    res += 'Buzz'
  }

  return res || i + 1
}))

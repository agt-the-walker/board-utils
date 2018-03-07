// thanks https://stackoverflow.com/a/3959682/7468493
factorial = (() => {
  const cache = {}
  fn = (n) => {
    if (n === 0) {
      return 1
    } else if (cache[n]) {
      return cache[n]
    }
    return cache[n] = n * fn(n - 1)
  }
  return fn
})()

module.exports = {factorial}

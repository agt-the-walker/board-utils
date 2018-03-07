// thanks https://en.wikipedia.org/wiki/Binomial_coefficient#Pascal's_triangle
binomialCoefficient = (() => {
  const cache = {}
  fn = (n, k) => {
    if (k > n/2)
      k = n - k
    if (n <= 1 || k == 0) {
      return 1
    } else if (cache[[n, k]]) {
      return cache[[n, k]]
    }
    return cache[[n, k]] = fn(n - 1, k - 1) + fn(n - 1, k)
  }
  return fn
})()

module.exports = {binomialCoefficient}

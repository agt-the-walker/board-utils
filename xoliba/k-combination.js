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

// thanks https://en.wikipedia.org/wiki/Combinatorial_number_system#Example
function kCombination(k, pos) {
  let remainder = pos
  let result = []

  for (; k > 0; k--) {
    if (remainder === 0) {
      result.push(k - 1)
    } else {
      let n = k
      while (binomialCoefficient(n, k) <= remainder)
        n++
      remainder -= binomialCoefficient(n - 1, k)
      result.push(n - 1)
    }
  }

  return result.reverse()
}

module.exports = {binomialCoefficient, kCombination}

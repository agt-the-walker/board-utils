const {factorial} = require('./k-combinations')

test('factorial 1 equals 1', () => {
  expect(factorial(1)).toBe(1)
})

test('factorial 5 equals 120', () => {
  expect(factorial(5)).toBe(120)
})

// thanks http://coolconversion.com/math/factorial/What-is-the-factorial-of_21
test('factorial 21 equals 51090942171709440000', () => {
  expect(factorial(21)).toBe(51090942171709440000)
})

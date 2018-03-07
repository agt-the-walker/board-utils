const {binomialCoefficient} = require('./k-combinations')

// thanks https://en.wikipedia.org/wiki/Binomial_coefficient#Pascal's_triangle
test('C(0, 0) equals 1', () => {
  expect(binomialCoefficient(0, 0)).toBe(1)
})
test('C(1, 0) equals 1', () => {
  expect(binomialCoefficient(1, 0)).toBe(1)
})
test('C(1, 1) equals 1', () => {
  expect(binomialCoefficient(1, 1)).toBe(1)
})
test('C(2, 0) equals 1', () => {
  expect(binomialCoefficient(2, 0)).toBe(1)
})

// thanks http://www.ohrt.com/odds/binomial.php
test('C(5, 2) equals 10', () => {
  expect(binomialCoefficient(5, 2)).toBe(10)
})

// https://en.wikipedia.org/wiki/Binomial_coefficient#Factorial_formula
test('C(5, 3) equals 10', () => {
  expect(binomialCoefficient(5, 3)).toBe(10)
})

// thanks http://www.ohrt.com/odds/binomial.php
test('C(45, 17) equals 1103068603890', () => {
  expect(binomialCoefficient(45, 17)).toBe(1103068603890)
})

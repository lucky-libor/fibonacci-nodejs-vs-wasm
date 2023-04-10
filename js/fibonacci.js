function fibonacciJs(n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 1;
  }

  return fibonacciJs(n - 1) + fibonacciJs(n - 2);
}

module.exports = {fibonacciJs}
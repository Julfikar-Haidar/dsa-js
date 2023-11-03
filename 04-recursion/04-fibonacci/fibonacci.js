function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  console.log(" fibonacci", num);
  let result = fibonacci(num - 1) + fibonacci(num - 2);
  console.log(" after", result);

  return result;
}

module.exports = fibonacci;

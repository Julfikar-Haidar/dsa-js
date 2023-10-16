const getSum = require("./get-sum");

test("should Calculating the sum two numbers", () => {
  const num1 = 5;
  const num2 = 7;

  // call the function
  const result = getSum(num1, num2);
  // check if the result is equal to the expected sum

  expect(result).toBe(12);
});

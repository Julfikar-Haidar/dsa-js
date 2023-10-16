const calculator = require("./calculator");

test("Performing arithmetic operation using the calculator function", () => {
  //   Test case input
  const num1 = 5;
  const num2 = 7;
  // addition
  expect(calculator(num1, num2, "+")).toBe(12);

  // Subtraction
  expect(calculator(num1, num2, "-")).toBe(-2);

  // Multiplication
  expect(calculator(num1, num2, "*")).toBe(35);

  // Division
  expect(calculator(num1, num2, "/")).toBeCloseTo(0.7143, 4);
});

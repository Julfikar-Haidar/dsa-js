function calculator(num1, num2, operator) {
  // declar the variable to stoe the reult
  let result;

  // Use a switch statement to determine which operator to perform
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      // if the operator is not use the above throw an error
      throw new Error("Invalid operator " + operator);
      break;
  }

  return result;
}

module.exports = calculator;

const isPalindrome = require("./palindrome");

test("Checking for palindrome string", () => {
  expect(isPalindrome("maddam")).toBe(true);
  expect(isPalindrome("Hello@%")).toBe(false);
  expect(isPalindrome("racecar")).toBe(true);
});

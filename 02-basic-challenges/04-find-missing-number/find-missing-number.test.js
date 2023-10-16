const findMissingNumber = require("./find-missing-number");

test("Find missing number", () => {
  expect(findMissingNumber([1, 3, 4, 5])).toBe(2);
  expect(findMissingNumber([1, 2, 4, 5])).toBe(3);
});

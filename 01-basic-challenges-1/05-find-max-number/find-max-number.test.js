const findmaxNumber = require("./find-max-number");

test("Finding the maximun number in an array", () => {
  expect(findmaxNumber([1, 5, 8, 19, 3])).toBe(19);
  expect(findmaxNumber([1, 5, 8, 19, 33, 97, 12])).toBe(97);
  expect(findmaxNumber([1, 5, 8, 19, 3, 40])).toBe(40);
});

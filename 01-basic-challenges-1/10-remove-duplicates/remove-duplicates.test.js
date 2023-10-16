const removeDuplicates = require("./remove-duplicates");

test("Remove duplicates from an array", () => {
  expect(removeDuplicates([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
});

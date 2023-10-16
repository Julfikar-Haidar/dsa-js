const countOccurence = require("./count-occurence");

test("Count occurence of a character", () => {
  expect(countOccurence("hello", "l")).toBe(2);
  expect(countOccurence("programming", "m")).toBe(2);
});

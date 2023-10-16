const reverseString = require("./reverse-string");

test("Reverseing a string", () => {
  expect(reverseString("world")).toBe("dlrow");
  expect(reverseString("12345")).toBe("54321");
});

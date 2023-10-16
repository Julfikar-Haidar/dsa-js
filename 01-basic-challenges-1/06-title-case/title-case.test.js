const titleCase = require("./title-case");

test("Converting string to title case", () => {
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("javascript world")).toBe("Javascript World");
});

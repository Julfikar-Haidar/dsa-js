const countVowels = require("./vowels");

test("Count the vowels string", () => {
  expect(countVowels("hi")).toBe(1);
  expect(countVowels("julfikar")).toBe(3);
  expect(countVowels("like")).toBe(2);
});

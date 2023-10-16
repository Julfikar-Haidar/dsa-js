const findMissingLetter = require("./find-missing-letter");

test("Find Missing Letter", () => {
  expect(findMissingLetter(["a", "b", "c", "e"])).toBe("d");
  expect(findMissingLetter(["F", "G", "H", "J"])).toBe("I");
});

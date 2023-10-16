const validateEmail = require("./validate-email");

test("Valid email address", () => {
  expect(validateEmail("admin@email.com")).toBe(true);
  expect(validateEmail("david.doe@domain.com")).toBe(true);
});

test("Invalid email address", () => {
  expect(validateEmail("admincom")).toBe(false);
  expect(validateEmail("@domain.com")).toBe(false);
  expect(validateEmail("use@domain")).toBe(false);
});

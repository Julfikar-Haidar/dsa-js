const helloworld = require("./hello-world");

test("Returnig helo world as a string", () => {
  const result = helloworld();
  expect(result).toBe("hello world");
});

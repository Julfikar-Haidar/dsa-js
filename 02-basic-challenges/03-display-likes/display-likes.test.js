const displayLikes = require("./display-like");

test("Display likes", () => {
  expect(displayLikes([])).toEqual("no one likes this");
  expect(displayLikes(["Peter"])).toEqual("Peter likes this");
  expect(displayLikes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
  expect(displayLikes(["Max", "John", "Mark"])).toEqual(
    "Max, John and Mark like this"
  );
  expect(displayLikes(["Alex", "Jacob", "Mark", "Max"])).toEqual(
    "Alex, Jacob and 3 others like this"
  );
  expect(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"])).toEqual(
    "Alex, Jacob and 4 others like this"
  );
});

const generateHashtag = require("./hashtag-generator");

const result = generateHashtag("JavaScript is awesome"); // "#JavaScriptIsAwesome"
const result2 = generateHashtag(
  "This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140"
); // false

console.log(result);
console.log(result2);

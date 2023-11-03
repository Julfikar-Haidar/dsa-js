function reverseString(str) {
  // Base case - if str is empty, return empty string
  if (str === "") {
    return "";
  }
  // Recursive case - return the last character of str and call reverseString again
  console.log("7", str);
  let result = reverseString(str.substr(1)) + str.charAt(0);
  console.log("result", result);
  return result;
}

// Shorter version
// const reverseString = (str) =>
//   str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);

// reverseString("Hello");

module.exports = reverseString;

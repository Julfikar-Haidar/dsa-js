// Solution 1
// function isPalindrome(str) {
//   //   Remove all non-alphanumeric characters and convert string to lowercase
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   // Reverse the string
//   const reversedStr = formattedStr.split("").reverse().join("");
//   // Return whether the formatted string is equal to the reversed string
//   return formattedStr === reversedStr;
// }

// Solution 2

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert the string to lowercase
  const formattedStr = removeNonalphanumeric(str);
  // Reverse the string
  const reversedStr = reverseString(formattedStr);
  // Return whether the formatted string is equal to the reversed string
  return formattedStr === reversedStr;
}

// Helpers functions
function removeNonalphanumeric(str) {
  // Declar a variable to store the formatted string
  let formattedStr = "";
  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    //   If the current character is alphanumeric, add it to the formatted string
    let char = str[i];
    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function isAlphaNumeric(char) {
  // Get the character code
  let code = char.charCodeAt(0);
  // Return whether the character is alphanumeric
  return (
    (code >= 48 && code <= 57) || // Numers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
}

function reverseString(str) {
  // Declare a variable to store the reversed string
  let reverseStr = "";
  // Loop through the string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    //Add each character to the reversed string
    reverseStr += str[i];
  }

  return reverseStr;
}

module.exports = isPalindrome;

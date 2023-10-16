// Solution 1
// function areAllCharUnique(str) {
//   // Create an object to keep track of the characters in the string
//   let charCount = {};
//   // Loop through the string
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     // If the character is already in the object, return false
//     if (charCount[char]) {
//       return false;
//     }
//     // Add the current character to the object
//     charCount[char] = true;
//     // console.log(charCount);
//   }
//   // If no characters are repeated, return true

//   return true;
// }

// Solution 2
function areAllCharUnique(str) {
  // Create a new set
  let charCount = new Set();

  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // If the set already has the current character, return false

    if (charCount.has(char)) {
      return false;
    }
    // Add the current character to the set
    charCount.add(char);
  }
  // If no characters are repeated, return true
  return true;
}

module.exports = areAllCharUnique;

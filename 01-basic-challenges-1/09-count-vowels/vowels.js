function countVowels(str) {
  // Declar the variables count the vowels
  let count = 0;
  let formattedStr = str.toLowerCase();
  for (let i = 0; i < formattedStr.length; i++) {
    // Declar the variables stored in the current character
    let char = formattedStr[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  // Return the number of vowels
  return count;
}

module.exports = countVowels;

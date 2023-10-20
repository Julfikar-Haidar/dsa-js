function valiAnagaram(str1, str2) {
  const charCount1 = buildCharCountMap(str1);
  const charCount2 = buildCharCountMap(str2);

  // Compare the character count maps for both words
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  for (let char in charCount2) {
    if (charCount2[char] !== charCount1[char]) {
      return false;
    }
  }

  return true;
}

function buildCharCountMap(word) {
  const charCount = {};

  for (let char of word) {
    char = char.toLowerCase(); // Convert to lowercase to make it case-insensitive
    if (char !== " ") {
      // Ignore spaces
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  return charCount;
}

module.exports = valiAnagaram;

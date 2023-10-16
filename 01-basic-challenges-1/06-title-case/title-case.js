function titleCase(str) {
  // Split the string into an array of words

  const words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

// Solution 2
// function titleCase(str) {
//   // Replace the first letter of each word with it uppercase equivalent
//   return str.replace(/\b\w/g, (match) => match.toUpperCase());
// }

module.exports = titleCase;

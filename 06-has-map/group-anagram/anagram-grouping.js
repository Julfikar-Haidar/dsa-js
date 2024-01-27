function anagramGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedChars = word.split("").sort().join("");
    // console.log(word, "word");
    console.log(sortedChars, "==", word);

    if (anagramGroups.has(sortedChars)) {
      console.log(word, "get");
      anagramGroups.get(sortedChars).push(word);
    } else {
      console.log(word, "set");
      anagramGroups.set(sortedChars, [word]);
    }
  }
  console.log(anagramGroups, "anagramGroups");

  return Array.from(anagramGroups.values());
}

module.exports = anagramGrouping;

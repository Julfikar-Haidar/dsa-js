function anagramGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedChars = word.split("").sort().join("");
    // console.log(word, "word");
    console.log(sortedChars, "sort");

    if (anagramGroups.has(sortedChars)) {
      console.log(word, "word");
      anagramGroups.get(sortedChars).push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }
  console.log(anagramGroups, "anagramGroups");

  return Array.from(anagramGroups.values());
}

module.exports = anagramGrouping;

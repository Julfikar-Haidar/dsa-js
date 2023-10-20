function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequent1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const frequent2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log("frequent1", frequent1);
  console.log("frequent2", frequent2);
  let data = Object.keys(frequent1).every(
    (char) => frequent1[char] === frequent2[char]
  );
  return data;
}

module.exports = validAnagrams;

// function hashtagGenerator(str) {
//   if (str.trim() === "") {
//     return false;
//   }

//   const words = str.split(/\s+/);
//   const capitalizeWord = words.map(
//     (word) => word.charAt(0).toUpperCase() + word.slice(1)
//   );

//   const hashtag = "#" + capitalizeWord.join(" ");
//   if (hashtag.length > 140) return false;

//   return hashtag;
// }

function hashtagGenerator(str) {
  const hashtag = str.split(" ").reduce((tag, word) => {
    return tag + word.charAt(0).toUpperCase() + word.slice(1);
  }, "#");
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = hashtagGenerator;

// solution one
// function countOccurence(str, char) {
//   //   Declare a variable to store the number of occurrences
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     //   if the current character is the same as the character we're looking for, the increment
//     if (element === char) {
//       count++;
//     }
//   }
//   return count;
// }

// solution 2

const countOccurence = (str, char) => str.split(char).length - 1;

module.exports = countOccurence;

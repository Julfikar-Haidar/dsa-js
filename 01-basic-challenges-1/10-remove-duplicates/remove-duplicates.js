// Solution 1
// function removeDuplicates(arr) {
//   // Declare an empty array to store the unique values
//   let uniqueArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     // If the current element is not in the unique array, add it
//     if (!uniqueArray.includes(element)) {
//       uniqueArray.push(element);
//     }
//   }
//   // Return the unique array
//   return uniqueArray;
// }

// Solution 2
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
module.exports = removeDuplicates;

// Solution 1 - Simplest solution

// function findmaxNumber(arr) {
//   // Math.max() can take any number of arguments, so we can use to spread opertaor
//   return Math.max(...arr);
// }

// Solution 2

function findmaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (element > max) {
      max = element;
    }
  }
  return max;
}
module.exports = findmaxNumber;

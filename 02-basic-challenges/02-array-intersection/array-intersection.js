// Solution 1
// function arrayIntersection(arr1, arr2) {
//   // Declare the variables  to store the data
//   let intersection = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
//       intersection.push(arr1[i]);
//     }
//   }
//   return intersection;
// }

// Solution 2

function arrayIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  let intersection = [];
  for (const num of arr2) {
    if (set1.has(num)) {
      intersection.push(num);
    }
  }

  return intersection;
}

module.exports = arrayIntersection;

function findMissingNumber(arr) {
  //  If the array is empty or undefined, return the undefined
  if (!arr || arr.length === 0) {
    return undefined;
  }

  // Add 1 to the length of the array to account to the missing number
  const n = arr.length + 1;
  // Calculate the expected sum of the numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;
  // Calculate the actual sum of the numbers in the array
  // You can use for loops to calculate the actual sum or use reduce
  //   let actualSum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     actualSum += arr[i];
  //   }
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;

function fizzBuzzArray(arr) {
  // Create an empty array to store the data
  let fizzArray = [];
  // Loop through the number from 1 to passed  in
  for (let i = 1; i <= arr; i++) {
    // If the number is divisible by 3 and 5, add 'FizzBuzz' to the array
    if (i % 3 === 0 && i % 5 === 0) {
      fizzArray.push("FizzBuzz");
      // If the number is divisible by 3  'Fizz' to the array
    } else if (i % 3 === 0) {
      fizzArray.push("Fizz");
      // If the number is divisible by 5  'Buzz' to the array
    } else if (i % 5 === 0) {
      fizzArray.push("Buzz");
    } else {
      // Otherwise, add the number to the array
      fizzArray.push(i);
    }
  }

  return fizzArray;
}

module.exports = fizzBuzzArray;

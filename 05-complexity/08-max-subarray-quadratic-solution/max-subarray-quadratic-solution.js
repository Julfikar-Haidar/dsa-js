function maxSubarraySum(arr, k) {
  let maxSum = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    // console.log("length", arr.length - k);
    // console.log(i, "i ");
    // console.log(k, "k");
    // console.log(i + k, "i + k");
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      const element = arr[j];
      //   console.log(element);
      currentSum += element;
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;

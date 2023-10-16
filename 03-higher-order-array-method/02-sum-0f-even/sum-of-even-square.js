function somOfEvenSquare(arr) {
  const filterEven = arr.filter((item) => item % 2 === 0);
  const sqaureEven = filterEven.map((item) => item ** 2);
  const sumOfEven = sqaureEven.reduce((sum, item) => sum + item, 0);
  return sumOfEven;
}

module.exports = somOfEvenSquare;

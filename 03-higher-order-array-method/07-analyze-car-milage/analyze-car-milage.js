function analyzeCarMilage(cars) {
  const totalMilage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const avgMile = totalMilage / cars.length;
  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return { avgMile, highestMileageCar, lowestMileageCar };
}

module.exports = analyzeCarMilage;

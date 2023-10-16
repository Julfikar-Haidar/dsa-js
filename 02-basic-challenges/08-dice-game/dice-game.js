// Function to simulate the dice game for a specified number of simulations
function diceGame(numberOfSimulation) {
  let results = []; // Initialize an array to store simulation results

  for (let i = 0; i < numberOfSimulation; i++) {
    const dice1 = rolleUp(); // Simulate the roll of the first dice
    const dice2 = rolleUp(); // Simulate the roll of the first dice
    const sum = dice1 + dice2; // Calculate the sum of the dice values

    let result = ""; // Initialize a variable to store the result of the current simulation

    // Check if the sum of the dice values is 7 or 11
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }
    // Add the simulation result to the results array
    results.push({ dice1, dice2, result });
  }

  return results; // Return the array of simulation results
}
// Function to simulate rolling a 6-sided die and returning a random number between 1 and 6
function rolleUp() {
  return Math.floor(Math.random() * 6) + 1;
}

module.exports = diceGame;

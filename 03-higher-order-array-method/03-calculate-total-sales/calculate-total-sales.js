// Solution 1
// function calculateTotalSalesWithTax(product, tax) {
//   //  Calculate total sales amount using the product price and quantity using the reduce method
//   const totalSales = product.reduce(
//     (sum, product) => sum + product.price * product.quantity,
//     0
//   );
//   // Calculate the tax amount using the total sales amount and the tax rate
//   const totalAmount = (totalSales * tax) / 100;
//   // Calculate the total sales amount with tax

//   const totalTaxAmount = totalSales + totalAmount;

//   return parseFloat(totalTaxAmount.toFixed(2));
// }

// Solution 2
function calculateTotalSalesWithTax(items, taxRate) {
  // Initialize a variable to keep track of the total cost
  let totalCost = 0;

  // Iterate through each item in the list
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Calculate the cost for the item (price * quantity)
    const itemCost = item.price * item.quantity;

    // Add the item cost to the total cost
    totalCost += itemCost;
  }
  console.log(totalCost);
  // Calculate the tax amount (total cost * tax rate)
  const taxAmount = (totalCost * taxRate) / 100;

  // Add the tax amount to the total cost
  totalCost += taxAmount;

  // Return the total cost with tax
  return totalCost;
}
module.exports = calculateTotalSalesWithTax;

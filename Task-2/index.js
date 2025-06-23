function calculateTotalCost(price, quantity, taxRate) {
    // Check if price, quantity, and taxRate are valid numbers
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number' ||
        isNaN(price) || isNaN(quantity) || isNaN(taxRate) ||
        price < 0 || quantity < 0 || taxRate < 0) {
        return "invalid input";
    }

    // Calculate the total cost
    const totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}

// Example usage
console.log(calculateTotalCost(100, 2, 0.05)); // Output: 210
console.log(calculateTotalCost(50, 3, 0.1));   // Output: 165
console.log(calculateTotalCost(-50, 3, 0.1));  // Output: "Invalid input."
console.log(calculateTotalCost(50, 'three', 0.1)); // Output: "Invalid input."
console.log(calculateTotalCost(50, 3, -0.1));   // Output: "Invalid input."


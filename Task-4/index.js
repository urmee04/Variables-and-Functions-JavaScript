function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    // Check if price, quantity, taxRate, and discount are valid numbers
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number' || typeof discount !== 'number' ||
        isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount) ||
        price < 0 || quantity < 0 || taxRate < 0 || discount < 0) {
        return "Invalid input.";
    }

    // Calculate the total cost before tax
    let totalCost = (price * quantity);

    // Subtract the discount from the total cost if provided
    if (discount > 0) {
        totalCost -= discount;
    }

    // Apply tax to the total cost
    totalCost *= (1 + taxRate);

    return totalCost;
}

// Example usage
console.log(calculateTotalCost(100, 2, 0.05));              // Output: 210
console.log(calculateTotalCost(50, 3, 0.1));                 // Output: 165
console.log(calculateTotalCost(-50, 3, 0.1));                // Output: "Invalid input."
console.log(calculateTotalCost(50, 'three', 0.1));           // Output: "Invalid input."
console.log(calculateTotalCost(50, 3, -0.1));                 // Output: "Invalid input."

function formatFullName(firstName, lastName) {
    // Check if either firstName or lastName is missing
    if (!firstName || !lastName) {
        return "invalid name input.";
    }

    // Capitalize the first letter of firstName and lastName
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    // Return the full name in the format lastName, firstName
    return `${formattedLastName}, ${formattedFirstName}`;
}

// Example usage
console.log(formatFullName("Romana", "Akter")); // Output: "Romana, Akter"
console.log(formatFullName("romana", ""));    // Output: "Invalid name input."
console.log(formatFullName("", "akter"));    // Output: "Invalid name input."
console.log(formatFullName("ROMANA", "AKTER")); // Output: "Romana, Akter"

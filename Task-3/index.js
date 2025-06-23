function checkEligibility(age, isEmployed) {
    // Check if the person is over 18 and employed
    if (age > 18 && isEmployed) {
        return "You are eligible for the program.";
    }
    // Check if the person is over 18 but unemployed
    else if (age > 18 && !isEmployed) {
        return "You are conditionally eligible for the program.";
    }
    // If the person is 18 or younger
    else {
        return "You are not eligible for the program.";
    }
}

// Example usage
console.log(checkEligibility(20, true));  // Output: "You are eligible for the program."
console.log(checkEligibility(20, false)); // Output: "You are conditionally eligible for the program."
console.log(checkEligibility(18, true));  // Output: "You are not eligible for the program."
console.log(checkEligibility(16, false)); // Output: "You are not eligible for the program."


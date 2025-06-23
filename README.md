## Lab 4.1: Variables and Functions

### Overview
This lab aims to solve more coding challenges that involve creating and manipulating variables, using functions with multiple parameters, and handling conditional logic.


### Learning Objectives

By completing this lab, I have demonstrated the ability to:
- Manipulate variables to perform mathematical operations and string manipulation.
- Write and call functions that use parameters and return values.
- Use conditional logic inside functions to create more dynamic behavior.
- Refactor code to improve readability and reusability.

---

### Tasks Completed

#### Task 1: Flexible String Manipulation with Functions

- Created a function called formatFullName that takes two parameters: firstName and lastName and returns the full name in the format lastName, firstName.
- Formatted the firstName and lastName so that the first letter of each is always capatilized.
- Added a condition that checks if either the first or last name is missing. If so, there is a returning string saying “Invalid name input.”

#### Task 2: Mathematical Operations with Multiple Parameters

- Wrote a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
- The function calculates the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
- Checked that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”

#### Task 3: Functions with Conditional Logic

- Wrote a function called checkEligibility that takes two parameters: age and isEmployed. The function checks if a person is eligible for a program based on the following rules:
- If the person is over 18 and employed, they are eligible.
- If the person is over 18 but unemployed, they are conditionally eligible.
- If the person is 18 or younger, they are not eligible.
Returns an appropriate string message for each scenario.

#### Task 4: Refactoring for Reusability

- Refactored the calculateTotalCost function from Task 2 to include an optional discount parameter. 

- If the discount is provided, the function should subtract the discount from the total cost before applying tax.
- If no discount is provided, calculate the total cost as before.

---
### How to Run This Project

1. Clone the repository or download the `.zip` file.
2. Navigate to Tasks folders and run index.js file in your local development environment.
3. Change the example usage to test the code response.

---

### Technologies Used
- JavaScript (ES6)

---

### File Structure
```
 variables-and-functions/
├── Task1
├── Task2
├── Task3
├── Task4
└── README.md
```
---
##### Reflection Questions

**1. How did you approach creating more flexible functions with parameters?**

I focused on defining clear function signatures that accept parameters, allowing for dynamic behavior based on user input. This approach enhances the reusability of the functions across different scenarios.

**2. What challenges did you face while incorporating conditional logic in your functions?**

One challenge was ensuring that all edge cases were handled correctly, such as validating inputs and providing appropriate feedback.

**3. How does refactoring improve the readability and maintainability of your code?**
Refactoring helps to simplify complex functions, making them easier to understand and modify in the future.






























// Array Sorting

// Prompt for array values
let numberInput = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):");
let nameInput = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie,Alicia,Redon):");

// Convert string inputs into arrays
let numbers = numberInput.split(",").map(Number);
let names = nameInput.split(",").map(name => name.trim());

// Merge both arrays
let mergedArray = [...numbers, ...names];

// Log merged array
console.log("Merged Array:", mergedArray);

// Sort numbers in descending order
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

// Sort names alphabetically
let sortedNames = [...names].sort();
console.log("Sorted Names (Alphabetically):", sortedNames);

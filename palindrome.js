// Palindrome

// Prompt for two words
let word1 = prompt("Enter first word (e.g., RACECAR):");
let word2 = prompt("Enter second word (e.g., RECORDER):");

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Reverse the words
let reversed1 = reverseString(word1);
let reversed2 = reverseString(word2);

// Log original and reversed words
console.log("Original Word 1:", word1);
console.log("Reversed Word 1:", reversed1);
console.log("Is Palindrome?", word1 === reversed1);

console.log("Original Word 2:", word2);
console.log("Reversed Word 2:", reversed2);
console.log("Is Palindrome?", word2 === reversed2);

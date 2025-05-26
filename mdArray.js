// Array Restructuring

// Prompt for names and ages
let names = prompt("Enter 5 names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise)").split(",").map(name => name.trim());
let ages = prompt("Enter 5 corresponding ages separated by commas (e.g., 24,65,21,5,9)").split(",").map(age => parseInt(age));

// Create the multi-dimensional array [name, age]
let restructuredArray = [];

// Combine the arrays into [name, age]
for (let i = 0; i < names.length; i++) {
    restructuredArray.push([names[i], ages[i]]);
}

// Log each [name, age] pair
console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(pair => {
    console.log(pair);
});

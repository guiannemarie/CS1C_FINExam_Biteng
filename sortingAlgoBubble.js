// Sorting Algorithms with Bubble Sort

let numbers = [];

// Prompt for 10 numbers
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Enter number #${i + 1}:`));
    numbers.push(num);
}

console.log("Original Array:", numbers);

// Bubble Sort Function
function bubbleSort(arr) {
    let n = arr.length;
    let temp;
    console.log("\nBubble Sort Process:");

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap values
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(`Swapped => ${arr[j]} and ${arr[j + 1]}`);
            }
        }
    }
    return arr;
}

// Perform Bubble Sort and display result
let sorted = bubbleSort(numbers);
console.log("\nSorted Array:", sorted);

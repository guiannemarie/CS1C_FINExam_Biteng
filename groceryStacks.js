// Grocery Items with Stacks

let groceryStack = []; // Stack initialized as empty array

// Peek function - checks top of stack or if it's empty
function peek(stack) {
    if (stack.length === 0) {
        console.log("Stack is empty.");
        return null;
    } else {
        return stack[stack.length - 1];
    }
}

// Push function - adds item to stack
function push(stack, item) {
    stack.push(item);
    console.log("Item pushed:", item);
    console.log("Top of stack (peek):", peek(stack));
    console.log("Current Stack:", stack);
}

// Pop function - removes last item
function pop(stack) {
    if (stack.length === 0) {
        console.log("Cannot pop. Stack is empty.");
    } else {
        let removed = stack.pop();
        console.log("Item popped:", removed);
        console.log("Top of stack (peek):", peek(stack));
        console.log("Current Stack:", stack);
    }
}

// Get 5 grocery items via prompt
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item #${i + 1}:`);
    push(groceryStack, item);
}

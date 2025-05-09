
let display = document.getElementById('display');

// Append number or operator to the display
function appendToDisplay(value) {

    display.value += value;
}

// Clear the entire display
function clearDisplay() {

    display.value = '';
}

// Delete the last character from the display
function deleteLast() {

    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

// TODO: Implement run your functions here
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (!isNaN(key) || key === ".") {
        appendToDisplay(key); 
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key); 
    } else if (key === "Enter") {
        event.preventDefault(); 
        calculateResult(); 
    } else if (key === "Backspace") {
        deleteLast(); 
    } else if (key === "Escape") {
        clearDisplay(); 
    }
});


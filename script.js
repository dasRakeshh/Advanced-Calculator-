let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (operation !== null) calculateResult();
    previousInput = currentInput;
    currentInput = '';
    operation = op;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function calculateResult() {
    if (currentInput === '' || previousInput === '' || operation === null) return;

    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '^':
            result = Math.pow(prev, curr);
            break;
        case '%':
            result = (prev * curr) / 100;
            break;
        case 'sqrt':
            result = Math.sqrt(curr);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}

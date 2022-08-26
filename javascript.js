const bigScreen = document.querySelector('#lower-display')
const smallScreen = document.querySelector('#upper-display');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';
let firstNegative = false;
let secondNegative = false;
let firstDecimal = false;
let secondDecimal = false;


const clickNumber = document.querySelectorAll('.number');

// clickNumber.forEach(el => el.addEventListener('click', event => {
//     if (operator === '' && result === '' && firstOperand.length < 10) {
//         smallScreen.textContent += event.target.value;
//         firstOperand += event.target.value;
//     } else if (operator === '' && result !== '' && secondOperand.length < 10) {
//         smallScreen.textContent = `${result}${operator}`;
//         smallScreen.textContent += event.target.value;
//         secondOperand += event.target.value;
//     } else if (operator !== '' && result === '' && secondOperand.length < 10) {
//         smallScreen.textContent += event.target.value;
//         secondOperand += event.target.value;
//     } else if (operator === '' && result !== '') {
//         smallScreen.textContent = 'Choose an operator';
//     } else {
//         return;
//     }
// }));

clickNumber.forEach(el => el.addEventListener('click', event => {
    if (operator === '' && result === '' && firstOperand.length < 10) {
        smallScreen.textContent += event.target.value;
        firstOperand += event.target.value;
    } else if (operator !== '' && result === '' && secondOperand.length < 10) {
        smallScreen.textContent += event.target.value;
        secondOperand += event.target.value;
    } else if (operator === '' && result !== '' && secondOperand.length < 10) {
        smallScreen.textContent = 'Choose an operator';
    } else if (operator !== '' && result !== '' && secondOperand.length < 10) {
        smallScreen.textContent += event.target.value;
        secondOperand += event.target.value;
    } else {
        return;
    }
}));

const clickOperator = document.querySelectorAll('.operator');

clickOperator.forEach(el => el.addEventListener('click', event => {
    if (firstOperand === '') {
        smallScreen.textContent = 'Please choose a number';
    } else if (operator === '' && result === '' && firstOperand !== '') {
        smallScreen.textContent += event.target.value;
        operator = event.target.value;
    } else if (operator !== '' && firstOperand !== '' && secondOperand !== 0) {
        return;
    } else {
        smallScreen.textContent = result += event.target.value
        operator = event.target.value;
    }
}));

const clickDecimal = document.querySelector('#decimal');

clickDecimal.addEventListener("click", function () {
    if (decimal === true) {
        return;
    } else if (operator === '' && firstOperand === '') {
        smallScreen.textContent += '0.';
        firstOperand += '0.';
    } else if (operator === '' && firstOperand.length < 8) {
        smallScreen.textContent += '.';
        firstOperand += '.';
    } else if (operator !== '' && secondOperand === '') {
        smallScreen.textContent += '0.';
        secondOperand += '0.';
    } else if (operator !== '' && secondOperand.length < 8) {
        smallScreen.textContent += '.';
        secondOperand += '.';
    } else {
        return;
    }
});

const clickDelete = document.querySelector('#delete');

clickDelete.addEventListener("click", function () {
    if (operator === '' && result === '') {
        smallScreen.textContent = firstOperand.slice(0, firstOperand.length - 1);
        firstOperand = firstOperand.slice(0, firstOperand.length - 1);
    } else if (operator !== '' && secondOperand === '') {
        smallScreen.textContent = firstOperand;
        operator = '';
    } else if (operator !== '' && secondOperand !== '') {
        smallScreen.textContent = `${firstOperand}${operator}${secondOperand.slice(0, secondOperand.length - 1)}`
        secondOperand = secondOperand.slice(0, secondOperand.length - 1);
    } else {
        return;
    }
});

const clickClear = document.querySelector('#clear');

clickClear.addEventListener('click', function () {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    firstNegative = false;
    secondNegative = false;
    firstDecimal = false;
    secondDecimal = false;
    smallScreen.textContent = '';
    bigScreen.textContent = '';
});

const clickNegative = document.querySelector('#negative');

clickNegative.addEventListener('click', function () {
    if (operator === '' && firstNegative === false) {
        smallScreen.textContent = `-${firstOperand}`;
        firstOperand = `-${firstOperand}`;
        firstNegative = true;
    } else if (operator === '' && firstNegative === true) {
        smallScreen.textContent = firstOperand.substring(1);
        firstOperand = firstOperand.substring(1);
        firstNegative = false;
    } else if (operator !== '' && secondNegative === false) {
        smallScreen.textContent = `${firstOperand}${operator}-${secondOperand}`;
        secondOperand = `-${secondOperand}`;
        secondNegative = true;
    } else if (operator !== '' && secondNegative === true) {
        smallScreen.textContent = `${firstOperand}${operator}${secondOperand.substring(1)}`;
        secondOperand = secondOperand.substring(1);
        secondNegative = false;
    } else {
        return;
    }
});

const clickEquals = document.querySelector('#equals');

clickEquals.addEventListener('click', function () {
    if (operator === '' && firstOperand !== '') { bigScreen.textContent = firstOperand };
    if (operator !== '' && firstOperand !== '' && secondOperand !== '') {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(secondOperand);
        switch (operator) {
            case '+':
                add(firstOperand, secondOperand);
                smallScreen.textContent = '';
                bigScreen.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '-':
                subtract(firstOperand, secondOperand);
                smallScreen.textContent = '';
                bigScreen.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '*':
                multiply(firstOperand, secondOperand);
                smallScreen.textContent = '';
                bigScreen.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '/':
                divide(firstOperand, secondOperand);
                smallScreen.textContent = '';
                bigScreen.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '**':
                exponent(firstOperand, secondOperand);
                smallScreen.textContent = '';
                bigScreen.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
        }
    } else {
        return;
    }
});


// Operator Functions

function add(a, b) {
    result = a + b;
};

function subtract(a, b) {
    result = a - b;
};

function multiply(a, b) {
    result = a * b;
};

function divide(a, b) {
    result = a / b;
};

function exponent(a, b) {
    result = a ** b;
};


//  NEED
//
// keystroke functionality
//
// CSS: make display 1 line, dont need big and small displays
// https://mrbuddh4.github.io/calculator/
// 
// CSS: make the operator an active state button
// 
// fix decimals (only input 1)
// 
// round?
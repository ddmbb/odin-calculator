const bigScreen = document.querySelector('#lower-display')
const smallScreen = document.querySelector('#upper-display');
let firstOperand = '';
let secondOperand = '';
let operator = '';

const clickNumber = document.querySelectorAll('.number');

clickNumber.forEach(el => el.addEventListener('click', event => {
    if (operator === '' && firstOperand.length < 10) {
        smallScreen.textContent += event.target.value;
        firstOperand += event.target.value;
    } else if (operator !== '' && secondOperand.length < 10) {
        smallScreen.textContent += event.target.value;
        secondOperand += event.target.value;
    } else {
        return;
    }
    console.log({ firstOperand });
    console.log({ secondOperand });
}));

const clickOperator = document.querySelectorAll('.operator');

clickOperator.forEach(el => el.addEventListener('click', event => {
    if (operator === '') {
        smallScreen.textContent += event.target.value;
        operator = event.target.value;
    }
}));

const clickDecimal = document.querySelector('#decimal');

clickDecimal.addEventListener("click", function () {
    if (operator === '' && firstOperand === '') {
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

// Cannot reset operator to '' or reset smallScreen text

const clickDelete = document.querySelector('#delete');

clickDelete.addEventListener("click", function () {
    if (operator === '') {
        smallScreen.textContent = firstOperand.slice(0, firstOperand.length - 1);
        firstOperand = firstOperand.slice(0, firstOperand.length - 1);
    } else if (operator !== '' && secondOperand === '') {
        smallScreen.textContent = firstOperand;
        operator = '';
    } else {
        smallScreen.textContent = `${firstOperand}${operator}${firstOperand.slice(0, firstOperand.length - 1)}`
        secondOperand = secondOperand.slice(0, secondOperand.length - 1);
    }
    console.log('delete');
    console.log({ firstOperand });
    console.log({ secondOperand });
    console.log({ operator });
});

const clickClear = document.querySelector('#clear');

clickClear.addEventListener("click", function () {
    let
})


// Operator Functions

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function exponent(a, b) {
    return a ** b;
}


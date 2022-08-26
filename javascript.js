const display = document.querySelector('#display');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';
let firstNegative = false;
let secondNegative = false;
let firstDecimal = false;
let secondDecimal = false;

const clickNumber = document.querySelectorAll('.number');

clickNumber.forEach(el => el.addEventListener('click', event => {
    if (operator === '' && result === '' && firstOperand.length < 10) {
        display.textContent += event.target.value;
        firstOperand += event.target.value;
        clearNumber();
    } else if (operator !== '' && result === '' && secondOperand.length < 10) {
        secondOperand += event.target.value;
        display.textContent = `${secondOperand}`;
    } else if (operator === '' && result !== '' && secondOperand.length < 10) {
        promptOperator();
    } else if (operator !== '' && result !== '' && secondOperand.length < 10) {
        secondOperand += event.target.value;
        display.textContent = `${secondOperand}`;
        clearOperator();
    } else {
        return;
    }
}));

const clickOperator = document.querySelectorAll('.operator');

clickOperator.forEach(el => el.addEventListener('click', event => {
    if (firstOperand === '') {
        promptNumber();
    } else if (operator === '' && result === '' && firstOperand !== '') {
        operator = event.target.value;
        event.target.classList.add('selected');
    } else if (operator !== '' && firstOperand !== '' && secondOperand !== 0) {
        return;
    } else {
        operator = event.target.value;
        clearOperator();
        event.target.classList.add('selected');
    }
}));



const clickDecimal = document.querySelector('#decimal');

clickDecimal.addEventListener("click", function () {
    if (firstDecimal === true) { return };
    if (secondDecimal === true) {
        return;
    } else if (operator === '' && firstOperand === '') {
        display.textContent += '0.';
        firstOperand += '0.';
        firstDecimal = true;
    } else if (operator === '' && firstOperand.length < 8) {
        display.textContent += '.';
        firstOperand += '.';
        firstDecimal = true;
    } else if (operator !== '' && secondOperand === '') {
        display.textContent += '0.';
        secondOperand += '0.';
        secondDecimal = true;
    } else if (operator !== '' && secondOperand.length < 8) {
        display.textContent += '.';
        secondOperand += '.';
        secondDecimal = true;
    } else {
        return;
    }
});

const clickDelete = document.querySelector('#delete');

clickDelete.addEventListener("click", function () {
    if (operator === '' && result === '') {
        display.textContent = firstOperand.slice(0, firstOperand.length - 1);
        firstOperand = firstOperand.slice(0, firstOperand.length - 1);
    } else if (operator !== '' && secondOperand !== '') {
        display.textContent = secondOperand.slice(0, secondOperand.length - 1);
        secondOperand = secondOperand.slice(0, secondOperand.length - 1);
    } else if (operator !== '' && secondOperand === '') {
        operator = '';
        clearOperator();
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
    display.textContent = '';
    clickOperator.forEach(function (element) {
        element.classList.remove('selected');
    });
});

const clickNegative = document.querySelector('#negative');

clickNegative.addEventListener('click', function () {
    if (operator === '' && firstNegative === false) {
        display.textContent = `-${firstOperand}`;
        firstOperand = `-${firstOperand}`;
        firstNegative = true;
    } else if (operator === '' && firstNegative === true) {
        display.textContent = firstOperand.substring(1);
        firstOperand = firstOperand.substring(1);
        firstNegative = false;
    } else if (operator !== '' && secondNegative === false) {
        display.textContent = `-${secondOperand}`;
        secondOperand = `-${secondOperand}`;
        secondNegative = true;
    } else if (operator !== '' && secondNegative === true) {
        display.textContent = `${secondOperand.substring(1)}`;
        secondOperand = secondOperand.substring(1);
        secondNegative = false;
    } else {
        return;
    }
});

const clickEquals = document.querySelector('#equals');

clickEquals.addEventListener('click', function () {
    if (operator !== '' && firstOperand !== '' && secondOperand !== '') {
        firstOperand = parseInt(firstOperand);
        secondOperand = parseInt(secondOperand);
        switch (operator) {
            case '+':
                add(firstOperand, secondOperand);
                display.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '-':
                subtract(firstOperand, secondOperand);
                display.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '*':
                multiply(firstOperand, secondOperand);
                display.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '/':
                divide(firstOperand, secondOperand);
                display.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
            case '**':
                exponent(firstOperand, secondOperand);
                display.textContent = result;
                firstOperand = result;
                operator = '';
                secondOperand = '';
                break;
        }
        clearOperator();
        secondDecimal = false;
        secondNegative = false;
    } else {
        return;
    }
});


// Operator Functions

function add(a, b) {
    result = (a + b).toPrecision(5);
};

function subtract(a, b) {
    result = (a - b).toPrecision(5);
};

function multiply(a, b) {
    result = (a * b).toPrecision(5);
};

function divide(a, b) {
    result = (a / b).toPrecision(5);
};

function exponent(a, b) {
    result = (a ** b).toPrecision(3);
};

// visual functions

function promptOperator() {
    clickOperator.forEach(function (element) {
        element.classList.add('selected');
    });
};

function clearOperator() {
    clickOperator.forEach(function (element) {
        element.classList.remove('selected');
    });
};

function promptNumber() {
    clickNumber.forEach(function (element) {
        element.classList.add('selected');
    });
};

function clearNumber() {
    clickNumber.forEach(function (element) {
        element.classList.remove('selected');
    });
};


//  NEED
//
// keystroke functionality
//
// clickDecimal function
//
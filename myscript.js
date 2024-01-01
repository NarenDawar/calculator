let num1;
let num2;
let operator;
const array1 = [];

function add(val1, val2) {
    return val1+val2;
}

function subtract(val1, val2) {
    return val1-val2;
}

function multiply(val1, val2) {
    return val1*val2;
}

function divide(val1, val2) {
    return val1/val2;
}

function operate(val1, val2, operator_1) {
    if (operator_1 == '*') {
        return multiply(val1, val2);
    }
    else if (operator_1 == "/") {
        return divide(val1, val2);
    }
    else if(operator_1 == "+") {
        return add(val1, val2);
    }
    else {
        return subtract(val1, val2);
    }
}
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');
let operators = document.querySelectorAll('.operator');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        display.textContent += button.textContent;
    });
});

if(array1.length == 4) {
    let new_num = operate(array1[0], array1[1], array1[2]);
    display.textContent = new_num;
    let temp = array1[4];
    array1.splice(0, array.length); 
    array1.push(new_num);
    array1.push(temp);
}

let clear = document.querySelector('#clear');

clear.addEventListener('click', function() {
    display.textContent = '';
});


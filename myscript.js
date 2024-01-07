let num1;
let num2;
let operator;
const array1 = [];


let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');
let operators = document.querySelectorAll('.operator');
let displayers = document.querySelectorAll('.displayer');

let equalsb = document.querySelector('#equals');
equalsb.onclick = function() {
    display.textContent = eval(display.textContent);
}

displayers.forEach(displayer => {
    displayer.addEventListener('click', function() {
        display.textContent += displayer.textContent;
    });
});


let clear = document.querySelector('#clear');
let deleter = document.querySelector('#delete');

deleter.onclick = function() {
    display.textContent = display.textContent.toString().slice(0,-1);
}

clear.addEventListener('click', function() {
    display.textContent = '';
});



`use strict`
import * as DOM from './calculatordom.js';



DOM.btnAdd.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnSub.onclick = () => sub(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnDiv.onclick = () => div(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnMult.onclick = () => mult(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnEql.onclick = () => disp();
DOM.btnClear.onclick = () => clear();

function add (num1, num2){
    let operator = "+";
    let answer = 0;
    answer = +num1 + +num2;
    disp(num, num2, operator, answer);
}

function sub (num1, num2){
    let operator = "-";
    let answer = 0;
    answer = +num1 - +num2;
    disp(num, num2, operator, answer);
}

function div (num1, num2){
    let operator = "/";
    let answer = 0;
    answer = +num1 / +num2;
    disp(num, num2, operator, answer);

}

function mult (num1, num2){
    let operator = "*";
    let answer = 0;
    answer = +num1 * +num2;
    disp(num, num2, operator, answer);
}



function disp(num1, num2, operator, answer){
    let child = document.createElement("li");
    child.innerHTML = num1, num2, operator, answer;
    DOM.output.appendChild(child);
}
function clear()
{
    DOM.inputOne.value = "";
    DOM.inputTwo.value = "";
    document.getElementById("list_output").innerHTML = "";
}
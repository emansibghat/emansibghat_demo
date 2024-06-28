let num1=4
let num2=8
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
let sumEl=document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "subt: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "div: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "multiply: " + result
}
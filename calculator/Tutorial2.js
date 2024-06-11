let firstNum = 20
let secondNum = 8

document.getElementById("num1").textContent = firstNum
document.getElementById("num2").textContent = secondNum

let sumTotal = document.getElementById("sum-total") 

function add() {
    let result = firstNum + secondNum
    sumTotal.textContent = "Sum:" + result
}

function minus() {
    let result = firstNum - secondNum
    sumTotal.textContent = "Sum:" + result
}

function divide() {
    let result = firstNum / secondNum
    sumTotal.textContent = "Sum:" + result
}

function multiply() {
    let result = firstNum * secondNum
    sumTotal.textContent = "Sum:" + result
}




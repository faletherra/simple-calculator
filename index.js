let sumEl = document.getElementById("sum-el");

function getNumbers() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
    return { num1, num2 };
}

function add() {
    let numbers = getNumbers();
    let result = numbers.num1 + numbers.num2;
    sumEl.textContent = "Result of addition: " + result;
}

function subtract() {
    let numbers = getNumbers();
    let result = numbers.num1 - numbers.num2;
    sumEl.textContent = "Result of subtraction: " + result;
}

function divide() {
    let numbers = getNumbers();
    if (numbers.num2 !== 0) {
        let result = numbers.num1 / numbers.num2;
        sumEl.textContent = "Result of division: " + result;
    } else {
        sumEl.textContent = "Cannot divide by zero!";
    }
}

function multiply() {
    let numbers = getNumbers();
    let result = numbers.num1 * numbers.num2;
    sumEl.textContent = "Result of multiplication: " + result;
}

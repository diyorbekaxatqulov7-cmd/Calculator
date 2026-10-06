let display = document.getElementById("display");
let previous = document.getElementById("previous");

let firstNumber = "";
let secondNumber = "";
let operator = "";


// Son qo'shish
function addNumber(number) {

    if (operator === "") {

        firstNumber = firstNumber + number;

        display.innerText = firstNumber;

    } else {

        secondNumber = secondNumber + number;

        display.innerText = secondNumber;
    }
}


// Operator tanlash
function chooseOperator(selectedOperator) {

    if (firstNumber === "") {
        return;
    }

    operator = selectedOperator;

    previous.innerText = firstNumber + " " + operator;

    display.innerText = "0";
}


// Hisoblash
function calculate() {

    if (
        firstNumber === "" ||
        secondNumber === "" ||
        operator === ""
    ) {
        return;
    }

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let result;


    if (operator === "+") {

        result = num1 + num2;

    } else if (operator === "-") {

        result = num1 - num2;

    } else if (operator === "*") {

        result = num1 * num2;

    } else if (operator === "/") {

        if (num2 === 0) {
            display.innerText = "Error";
            return;
        }

        result = num1 / num2;
    }


    previous.innerText =
        firstNumber + " " + operator + " " + secondNumber + " =";

    display.innerText = result;


    firstNumber = result.toString();

    secondNumber = "";

    operator = "";
}


// Hammasini tozalash
function clearCalculator() {

    firstNumber = "";

    secondNumber = "";

    operator = "";

    display.innerText = "0";

    previous.innerText = "";
}


// Oxirgi raqamni o'chirish
function deleteNumber() {

    if (operator === "") {

        firstNumber = firstNumber.slice(0, -1);

        if (firstNumber === "") {
            display.innerText = "0";
        } else {
            display.innerText = firstNumber;
        }

    } else {

        secondNumber = secondNumber.slice(0, -1);

        if (secondNumber === "") {
            display.innerText = "0";
        } else {
            display.innerText = secondNumber;
        }
    }
}


// Nuqta
function addDot() {

    if (operator === "") {

        if (!firstNumber.includes(".")) {

            firstNumber = firstNumber + ".";

            display.innerText = firstNumber;
        }

    } else {

        if (!secondNumber.includes(".")) {

            secondNumber = secondNumber + ".";

            display.innerText = secondNumber;
        }
    }
}


// Foiz
function percent() {

    if (operator === "") {

        if (firstNumber !== "") {

            firstNumber = Number(firstNumber) / 100;

            display.innerText = firstNumber;
        }

    } else {

        if (secondNumber !== "") {

            secondNumber = Number(secondNumber) / 100;

            display.innerText = secondNumber;
        }
    }
}
